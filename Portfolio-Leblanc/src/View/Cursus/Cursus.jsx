export default function Cursus() {
    return (
        <div id="cursus-part" className="flex flex-col justify-center items-center px-10 duration-700">
            <h2 className="text-5xl font-semibold my-16">Cursu<span className="text-cyan-600">s</span></h2>
            <div className="flex flex-col-reverse justify-center items-center gap-20 md:flex-row">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-3xl font-semibold my-16">Mon parcour<span className="text-cyan-600">s</span></h3>
                    <ul className="flex flex-col gap-5 justify-center items-center">
                        <li className="bg-cyan-600 w-full rounded-2xl p-4">2024 - 2026 Ecole G4 - Numérique et Gestion de projet RNCP 7</li>
                        <li className="bg-cyan-700 w-full rounded-2xl p-4">2014 - 2015 AFPA - Développeur logiciel RNCP 5</li>
                        <li className="bg-cyan-800 w-full rounded-2xl p-4">2004 - 2006 ELM - BAC Pro Maintenance informatique et réseaux</li>
                        <li className="bg-cyan-900 w-full rounded-2xl p-4">2002 - 2003 ELM - BEP Electronique</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-3xl font-semibold my-16">Mes experience<span className="text-cyan-600">s</span></h3>
                    <ul className="flex flex-col gap-5 justify-center items-center">
                        <li className="bg-cyan-600 w-full rounded-2xl p-4">2018 - 2024 FullMoon Distribution - Directeur de Magasin - CDI</li>
                        <li className="bg-cyan-700 w-full rounded-2xl p-4">2016 - 2017 Webgard Agence Web - Développeur Frontend - CDI</li>
                        <li className="bg-cyan-800 w-full rounded-2xl p-4">2015 - 2016 Picodev / Bill2Bin - Développeur Frontend - Stage</li>
                        <li className="bg-cyan-900 w-full rounded-2xl p-4">2006 - 2007 Buroclean Informatique - Technicien informatique - CDI</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}