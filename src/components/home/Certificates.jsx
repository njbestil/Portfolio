import { useEffect, useRef, useState } from "react";
import {
    HiArrowDownTray,
    HiArrowTopRightOnSquare,
    HiChevronDown,
    HiOutlineArrowUpRight,
    HiOutlineDocumentText,
    HiOutlineXMark,
} from "react-icons/hi2";
import certificates from "../../assets/certificates";

const resolvePublicPath = (path) => {
    if (typeof path !== "string" || !path.trim()) return null;

    const trimmedPath = path.trim();
    if (/^https?:\/\//i.test(trimmedPath)) return trimmedPath;

    const baseUrl = new URL(import.meta.env.BASE_URL, window.location.origin);
    return new URL(trimmedPath.replace(/^\/+/, ""), baseUrl).href;
};

export default function Certificates() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [expandedCertificateId, setExpandedCertificateId] = useState(null);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [previewStatus, setPreviewStatus] = useState("idle");
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);
    const triggerRef = useRef(null);

    const categories = [
        "All",
        ...new Set(certificates.map((certificate) => certificate.category).filter(Boolean)),
    ];
    const filteredCertificates = activeCategory === "All"
        ? certificates
        : certificates.filter((certificate) => certificate.category === activeCategory);

    const certificateUrl = selectedCertificate
        ? resolvePublicPath(selectedCertificate.path)
        : null;

    const closePreview = () => {
        setSelectedCertificate(null);
        setPreviewStatus("idle");
        requestAnimationFrame(() => triggerRef.current?.focus());
    };

    const openPreview = (certificate, trigger) => {
        triggerRef.current = trigger;
        setSelectedCertificate(certificate);
    };

    const toggleCertificateDetails = (certificateId) => {
        setExpandedCertificateId((currentId) => (
            currentId === certificateId ? null : certificateId
        ));
    };

    useEffect(() => {
        if (!selectedCertificate) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closePreview();
                return;
            }

            if (event.key !== "Tab" || !dialogRef.current) return;

            const focusableElements = dialogRef.current.querySelectorAll(
                'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement?.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedCertificate]);

    useEffect(() => {
        if (!selectedCertificate || !certificateUrl) {
            if (selectedCertificate) setPreviewStatus("error");
            return undefined;
        }

        const controller = new AbortController();
        setPreviewStatus("loading");

        fetch(certificateUrl, {
            method: "HEAD",
            signal: controller.signal,
        })
            .then((response) => {
                const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
                const isPdf = contentType.includes("application/pdf")
                    || contentType.includes("application/octet-stream");

                if (!response.ok || !isPdf) {
                    throw new Error("Certificate response is unavailable or is not a PDF");
                }
                setPreviewStatus("ready");
            })
            .catch((error) => {
                if (error.name !== "AbortError") setPreviewStatus("error");
            });

        return () => controller.abort();
    }, [certificateUrl, selectedCertificate]);

    return (
        <>
            <section id="certificates" className="bg-white px-5 py-16 text-[#111] sm:px-8 lg:py-24">
                <div className="mx-auto max-w-5xl">
                    <header>
                        <div className="flex items-center gap-4 text-[0.65rem] text-stone-500 sm:gap-5">
                            <p className="[font-family:'Fraunces',serif] whitespace-nowrap text-xs italic tracking-wider text-[#111]">
                                credentials &amp; recognition
                            </p>
                            <span className="h-px flex-1 bg-stone-300" aria-hidden="true" />
                            <p className="whitespace-nowrap">{certificates.length} certificates</p>
                        </div>

                        <h2 className="mt-7 [font-family:'Fraunces',serif] text-5xl font-light leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                            Certified
                            <span className="block italic">expertise.</span>
                        </h2>
                        <p className="mt-7 max-w-md text-sm leading-6 text-stone-500">
                            Professional certifications earned through continuous learning and frontend development.
                        </p>
                    </header>

                    {certificates.length > 0 ? (
                        <>
                            <div
                                className="mt-12 flex flex-wrap justify-center gap-2"
                                aria-label="Filter certificates by category"
                            >
                                {categories.map((category) => {
                                    const isActive = activeCategory === category;

                                    return (
                                        <button
                                            key={category}
                                            type="button"
                                            aria-pressed={isActive}
                                            onClick={() => {
                                                setActiveCategory(category);
                                                setExpandedCertificateId(null);
                                            }}
                                            className={`border border-[#111] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2 ${
                                                isActive
                                                    ? "bg-[#111] text-white"
                                                    : "bg-white text-[#111] hover:bg-[#111] hover:text-white"
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>

                            <div
                                className={`mt-10 grid grid-cols-1 border-l border-t border-stone-300 sm:grid-cols-2 ${
                                    filteredCertificates.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                                }`}
                            >
                                {filteredCertificates.map((certificate) => {
                                    const isExpanded = expandedCertificateId === certificate.id;
                                    const detailsId = `certificate-details-${certificate.id}`;

                                    return (
                                        <article
                                            key={certificate.id}
                                            className={`group relative border-b border-r border-stone-300 transition-colors duration-300 ${
                                                isExpanded
                                                    ? "bg-[#111] text-white"
                                                    : "bg-white text-[#111] hover:bg-[#111] hover:text-white"
                                            }`}
                                        >
                                            <button
                                                type="button"
                                                aria-expanded={isExpanded}
                                                aria-controls={detailsId}
                                                onClick={() => toggleCertificateDetails(certificate.id)}
                                                className="flex min-h-64 w-full flex-col p-7 text-left focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-inset"
                                            >
                                                <span className="flex w-full items-center justify-between">
                                                    <span className={`text-[0.65rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                                                        isExpanded
                                                            ? "text-stone-300"
                                                            : "text-stone-500 group-hover:text-stone-300"
                                                    }`}>
                                                        {certificate.category}
                                                    </span>
                                                    <span className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
                                                        isExpanded
                                                            ? "bg-white text-[#111]"
                                                            : "bg-stone-200 group-hover:bg-white group-hover:text-[#111]"
                                                    }`}>
                                                        <HiChevronDown
                                                            className={`text-sm transition-transform duration-300 ${
                                                                isExpanded ? "rotate-180" : ""
                                                            }`}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </span>

                                                <span className="mt-8 text-lg font-semibold leading-tight">
                                                    {certificate.name}
                                                </span>
                                                <span className={`mt-2 text-xs transition-colors duration-300 ${
                                                    isExpanded
                                                        ? "text-stone-300"
                                                        : "text-stone-500 group-hover:text-stone-300"
                                                }`}>
                                                    {certificate.issuer}
                                                </span>

                                                <span className="mt-auto flex pt-9">
                                                    <span className="min-w-0 flex-1 border-r border-stone-300 pr-5">
                                                        <span className="block text-[0.6rem] uppercase tracking-[0.16em] text-stone-400">
                                                            Issued
                                                        </span>
                                                        <span className="mt-2 block text-xs">{certificate.issued}</span>
                                                    </span>
                                                    <span className="min-w-0 flex-1 pl-5">
                                                        <span className="block text-[0.6rem] uppercase tracking-[0.16em] text-stone-400">
                                                            Expires
                                                        </span>
                                                        <span className="mt-2 block text-xs">{certificate.expires}</span>
                                                    </span>
                                                </span>
                                            </button>

                                            <div
                                                id={detailsId}
                                                aria-hidden={!isExpanded}
                                                className={`grid transition-all duration-300 ease-out ${
                                                    isExpanded
                                                        ? "grid-rows-[1fr] opacity-100"
                                                        : "grid-rows-[0fr] opacity-0"
                                                }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="border-t border-stone-700 px-7 pb-7 pt-6">
                                                        <p className="text-[0.6rem] uppercase tracking-[0.16em] text-stone-400">
                                                            Certificate details
                                                        </p>
                                                        <p className="mt-3 text-justify text-sm leading-6 text-stone-300">
                                                            {certificate.description}
                                                        </p>
                                                        <button
                                                            type="button"
                                                            tabIndex={isExpanded ? 0 : -1}
                                                            onClick={(event) => openPreview(certificate, event.currentTarget)}
                                                            className="mt-6 inline-flex items-center gap-2 border border-white bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#111] transition-colors hover:bg-[#111] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111]"
                                                        >
                                                            View certificate
                                                            <HiOutlineArrowUpRight className="text-base" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <div className="mt-12 border-y-2 border-[#111] py-12 text-center">
                            <HiOutlineDocumentText className="mx-auto text-4xl text-stone-400" />
                            <p className="mt-4 text-sm text-stone-600">Certificates will be added soon.</p>
                        </div>
                    )}
                </div>
            </section>

            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 sm:p-6"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) closePreview();
                    }}
                >
                    <section
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="certificate-dialog-title"
                        className="flex h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden border border-white bg-white shadow-2xl sm:h-[calc(100dvh-3rem)]"
                    >
                        <header className="flex shrink-0 items-center gap-4 border-b border-[#111] px-4 py-3 sm:px-5">
                            <div className="min-w-0 flex-1">
                                <p className="text-[0.6rem] uppercase tracking-[0.16em] text-stone-500">
                                    {selectedCertificate.category} · {selectedCertificate.issuer}
                                </p>
                                <h3 id="certificate-dialog-title" className="mt-1 truncate font-semibold text-[#111]">
                                    {selectedCertificate.name}
                                </h3>
                            </div>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={closePreview}
                                aria-label="Close certificate preview"
                                className="border border-[#111] p-2 text-[#111] transition-colors hover:bg-[#111] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2"
                            >
                                <HiOutlineXMark className="text-2xl" />
                            </button>
                        </header>

                        <div className="relative min-h-0 flex-1 bg-stone-200">
                            {previewStatus === "loading" && (
                                <div className="absolute inset-0 flex items-center justify-center" role="status">
                                    <span className="h-10 w-10 animate-spin rounded-full border-4 border-stone-400 border-t-[#2A2F33]" />
                                    <span className="sr-only">Loading certificate preview</span>
                                </div>
                            )}

                            {previewStatus === "ready" && certificateUrl && (
                                <iframe
                                    src={certificateUrl}
                                    title={`${selectedCertificate.name} PDF preview`}
                                    className="h-full w-full border-0"
                                    onError={() => setPreviewStatus("error")}
                                />
                            )}

                            {previewStatus === "error" && (
                                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                                    <HiOutlineDocumentText className="mb-4 text-5xl text-stone-500" />
                                    <p className="font-semibold text-dark">Preview unavailable</p>
                                    <p className="mt-2 max-w-md text-sm text-stone-600">
                                        The PDF could not be loaded. Check that the configured file path is correct,
                                        or use the original-file option below.
                                    </p>
                                </div>
                            )}
                        </div>

                        <footer className="flex shrink-0 flex-wrap justify-end gap-2 border-t border-[#111] px-4 py-3 sm:px-5">
                            {certificateUrl && (
                                <>
                                    <a
                                        href={certificateUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 border border-[#111] px-3 py-2 text-sm text-[#111] transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2"
                                    >
                                        <HiArrowTopRightOnSquare className="text-lg" />
                                        Open original
                                    </a>
                                    <a
                                        href={certificateUrl}
                                        download
                                        className="inline-flex items-center gap-2 border border-[#111] bg-[#111] px-3 py-2 text-sm text-white transition-colors hover:bg-white hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2"
                                    >
                                        <HiArrowDownTray className="text-lg" />
                                        Download
                                    </a>
                                </>
                            )}
                        </footer>
                    </section>
                </div>
            )}
        </>
    );
}
