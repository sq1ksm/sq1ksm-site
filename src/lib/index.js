export const routes = [
    {
        name: "Strona Główna",
        href: "/"
    },
    {
        name: "Krótkofalarstwo",
        sub: [
            { name: "Sprzęt", href: "/kf" },
            { name: "Tytus Romek i aTomek", href: "/tria" },
            { name: "Nowa Ameryka", href: "/ameryka" },
            { name: "4 pory roku", href: "/poryroku" },
            { name: "Amateur Kids Day", href: "/dzieci" },
            { name: "Twierdza Kostrzyn nad Odrą", href: "/twierdza" },
            { name: "Smolnica", href: "/smolnica" },
            { name: "Chwarszczany", href: "/chwarszczany" },
            { name: "Pszczelnik", href: "/pszczelnik" },
            { name: "Parki SPFF", href: "/spff" },
            { name: "APRS", href: "/aprs" },
            { name: "Eko-QSL", href: "/ekoqsl" },
            { name: "QRP FT-817", href: "/ft817" }
        ]
    },
    {
        name: "LOGI",
        sub: [
            { name: "SQ1KSM", href: "/log_sq1ksm" },
            { name: "SQ1KSL", href: "/log_sq1ksl" }
        ]
    },
    {
        name: "Fotografia",
        sub: [
            { name: "Nasze prace", href: "/foto" },
            { name: "Analogowa", href: "/analogowa" }
        ]
    },
    {
        name: "Informatyka",
        sub: [
            { name: "Webmastering", href: "/webmastering" },
            { name: "Piotruś", href: "/piotrus" },
            { name: "Windows Mobile", href: "/wm" },
            { name: "Stare Komputery", href: "/c64" }
        ]
    }, {
        name: "SWL & SAT",
        sub: [
            { name: "SFale długie i średnie", href: "/dlugie" },
            { name: "Odbiór satelitarny", href: "/sat" }
        ]
    },
    {
        name: "Inne",
        href: "/inne"
    }

]