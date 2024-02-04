export default function AboutMe() {
    return (
        <>
            <div id="aboutme" className="h-screen p-8">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="mb-8 text-right w-full">
                        <p className="text-4xl">
                            about<br />
                            <span className="font-bold text-7xl font-archivo-black">ME</span>
                        </p>
                    </div>
                    <div className="mb-8">
                        <p className="text-xs text-justify leading-loose">
                            My name is Neil Joseph, I successfully completed my bachelor's degree in computer engineering with a 
                            major in software engineering back in 2011. In order to enhance my digital creative skills, I 
                            have also pursued studies in graphic design, aiming to elevate my proficiency in 
                            web design as a frontend developer.
                        </p>
                        <div className="border-t-2 border-black w-20 my-4"></div>
                        <p className="text-xs text-justify leading-loose">
                            I have dedicated the past 12 years of my career to the IT business industry, and I have
                            discovered a deep passion for working in the web development domain as a full-stack professional.
                            While the field of computer engineering is expansive, I have found that web development is the
                            place where I can express creativity, leverage my imagination, and apply logical thinking
                            in its creation. Having grown up with a background in the arts, this field
                            allows me to seamlessly blend both my artistic side and professional expertise.
                        </p>  
                    </div>
                </div>
            </div>
        </>
    )
}