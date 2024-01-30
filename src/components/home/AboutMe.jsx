import Badge from "../Badge"

export default function AboutMe() {
    return (
        <>
            <div id="aboutme" className="p-8">
                <div className="mb-8 text-right">
                    <p className="text-3xl">
                        about<br/>
                        <span className="font-bold text-6xl font-archivo-black">ME</span>
                    </p>
                </div>
                <div className="mb-8">
                    <p className="text-xs text-justify leading-relaxed">
                        I have dedicated the past 11 years of my career to the IT business industry, and I have 
                        discovered a deep passion for working in the web development domain as a full-stack professional. 
                        While the field of computer engineering is expansive, I have found that web development is the 
                        place where I can express creativity, leverage my imagination, and apply logical thinking 
                        in its creation. Having grown up with a background in the arts, this field 
                        allows me to seamlessly blend both my artistic side and professional expertise.
                    </p>
                </div>

                <div className="relative mb-8">
                    <img src="/images/skill_bg.jpg" className="w-full h-full object-fill" />
                    <div className="absolute text-white bottom-10 right-5 text-right">
                        <p className="text-3xl">
                            my<br/>
                            <span className="font-bold text-4xl font-archivo-black">SKILLS</span>
                        </p>
                    </div>
                </div>
                
                <section>
                    <p className="text-xs text-justify mb-5 leading-relaxed">
                        I am working as a full-stack developer right now, specializing in ReactJS 
                        coupled with Tailwind CSS for the frontend, and Laravel for backend operations. I consider 
                        these platforms to be at the forefront of todays web development.
                    </p>

                    <h6 className="font-semibold mb-3">Technical Skills</h6>
                    <div className="flex flex-wrap gap-3 mb-5">
                        <Badge highlight={true}>PHP</Badge>
                        <Badge>Java</Badge>
                        <Badge highlight={true}>MySql</Badge>
                        <Badge>SqlLite</Badge>
                        <Badge>Oracle SQL</Badge>
                        <Badge>HTML</Badge>
                        <Badge highlight={true}>CSS</Badge>
                        <Badge highlight={true}>Javascript</Badge>
                        <Badge>Jquery</Badge>
                        <Badge>Bootstrap</Badge>
                        <Badge highlight={true}>Tailwind</Badge>
                        <Badge highlight={true}>ReactJS</Badge>
                        <Badge>Angular</Badge>
                        <Badge>OracleJet</Badge>
                        <Badge highlight={true}>Laravel</Badge>
                        <Badge>CodeIgniter</Badge>
                    </div>

                    <h6 className="font-semibold mb-3">Servers</h6>
                    <div className="flex flex-wrap gap-3 mb-5">
                        <Badge highlight={true}>wamp</Badge>
                        <Badge>xamp</Badge>
                        <Badge highlight={true}>cPanel</Badge>
                        <Badge>Oracle Weblogic Server</Badge>
                        <Badge>Windows Server</Badge>
                    </div>

                    <h6 className="font-semibold mb-3">Platforms</h6>
                    <div className="flex flex-wrap gap-3 mb-5">
                        <Badge highlight={true}>Visual Studio Code</Badge>
                        <Badge>Oracle JDeveloper</Badge>
                        <Badge highlight={true}>Postman</Badge>
                        <Badge>Sourcetree</Badge>
                        <Badge>Bitbucket</Badge>
                    </div>

                    <h6 className="font-semibold mb-3">Tools</h6>
                    <div className="flex flex-wrap gap-3">
                        <Badge>Adobe Photoshop</Badge>
                        <Badge>Adobe illustrator</Badge>
                        <Badge highlight={true}>Figma</Badge>
                    </div>
                </section>
            </div>
        </>
    )
}