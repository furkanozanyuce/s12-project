const langugaesData = {
    en: {
        top: {
            name: "Name",
            title: "I am a Frontend Developer...",
            about: "...who likes to craft solid and scalable frontend products with great user experiences.",
            langButton: "TÜRKÇE'YE GEÇ",
            modeButton: "DARK MODE",
            lightMode: "LIGHT MODE",
        },
        skills: {
            title: "Skills",
            apps: [
                {name: "JAVASCRIPT", icon: "https://s3-alpha-sig.figma.com/img/7a34/4b5b/3888c5ad5ffa3a6dba3961306694fe6c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzhFW1qOXmfMjElwyTZplz~NhSh4ZmN3uMiw9SH7yLQOhQMybKDmYLJY28IvFcKhQozY6wyKi9Fab6PlyPBwChtWVyrUrpbLV4tybgUH5C3jnmeMVZFyI1kwZe6gsoFXpWtxJ~tyTS9wn8IQh8hlg3vigKGyA6IaVCxCVdGxn86m6~6ic9NqXkwAylFXe1jhbYXjJBS~ij2iEpmWrVWew-msvrdltWkOvko2YBJoTloalEtwvubUVic~~bQKo09a8bUzS3YOBkzd9wgvCBS3RL7SsojotWPiuA~WOtYD~LpczJ4QPxIQAAakKfM~e~NnwxbD3xWK2XLYnbKVcLjBPg__"},
                {name: "NODE", icon: "https://s3-alpha-sig.figma.com/img/572f/0eae/0c5668f405e1025606253688b8c116ff?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peFRT2c~oiPhl3ZiSc8pSZn1IaeV3qFWX4wDvVvVytdgJTURLNcds2pc6Xp4dX~y1UpbQMyKfoMP1idy22~DqnF8q0V4sUA2CsnpL1AodFXEt~MWAylFRHcsrg2J6KGzdW4aBU-cj~AmIjpg7q3r8AgEoLSoyY5lahKjZj3bA6jKRtqHc8xVTPuj~tMhJOgU6DUck8diFWBRcsWcOhRAwtRRW~dktF~X9k-AduN9JkOSY3oaEMDKER441ega7aOBt5oC4ZV0uQw0xHUlgtYZEwE2kd-xNuz18vMJPFkE2R5FqeSAv4hzo2Hb8n1bY2fsfKFt8e0FySZfriHASUMr~w__"},
                {name: "REACT", icon: "https://s3-alpha-sig.figma.com/img/0360/469c/df5e54b9d53c349009ab14f28de46a4f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akvPA0elBChIuI1w8HqSHC-5Z7N0ZUo41bZBqGPS~ddy14kdpvCLTG6GrahBim2p9SIKpqHwwf5aJJOO0-Kiz17jWU4O1Guqoz1K5eDvX6o~JtYp6QwO7LMQ29~zSIsUdV46XSb0y0Cs4nMLEzhpcGI1Ef5Cq2oB2IceGDjU8NsN8eIfR8lZKPWzQpbky~trJjUaOXX8dT44JP1QKnsF-wBwCP0mzyaDl0ey3K6SXbOCYUfV4ZilaXZ7p~30jATtoA1MCH3IAnQVlRYrWoQ1O~XCuorInqvB0oWEX-3bfr9DdYed1mZbBtTl1J8fzCHa10Jk7qhvHtGVrb8fwi~3Fg__"},
                {name: "VS CODE", icon: "https://s3-alpha-sig.figma.com/img/f9f5/75a2/0b97e8a7e78c66e3ee35178c9339b3df?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=STaif-4qU5Hoc6meIfyhGVyUhYBXwJYx~r~HbSrPIkb9roUbZOS0ZpjgiDLRNSC06oWyoQAmMynvfWwmsLnkOxhR4GEhSRppqeMVXVajAHnRuY0rWiDuBxz2OVzpayjWjK9ua5jdLt9FyNDM6USYy0-b-oGRHprWWVp5FknEYn7BwbYZqya3GyU-ZYhf~iHlRsb1VozXLxsvB2JzfXt58UNvmlzsriA541qZpyrk4LoyZZqyAIBEppAD1sEmf9kYdMOKA3vkH4pLU0qOG72eG8dkg4O6LNPZvXKE5DyxxoypOpB~4MQsEt7p~b8A~9VJGtokxXjzm5Hd5~oX0HaW5Q__"},
                {name: "REDUX", icon: "https://s3-alpha-sig.figma.com/img/9a68/65b3/8c65fa3208025f2cb5752ee876ab6167?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gcv~QjIXzvnX13lKwOEnN~~JaIejVO-evvBeL5tsZgckQS4n~l7H4GY5ubiWqjXz0S4h0wBDL8i1VYm2u2Vni1p~Pbu9x3MUrToariPpfDBh23b3O3mCwuSMUMlkm8OqlfwiplT6n813HmTUDT5EXJPlcd11m1KPmT9rmqQB52YWBWohU~iZbB7jsTeZDbsU2BdRtyXdabGjgeXmtPhLatUy8uLyrW3DS3XrQLDJjwMx3bVrMKrnWwjo8tdoSpyrpMOLxpGY~ZZ3mUFJFC9~s3VaL26HR5mAi4weHIAlKRoaO~z-tc7~7Vf4FWJVSerxuAHsgZn4o3n~o-n1AJCRug__"},
                {name: "FIGMA", icon: "https://s3-alpha-sig.figma.com/img/8376/9568/62c7a95c81c85e20a72e7dd7b1642ddf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J01SLQKesW1C-4jc4tRu99yeVQu5ey5yZrPzgd46eC3lI-AIuHs1XWbkyLPgisKPcvfIJHraZzpRVbkEyYsjevXmvSg9ya0MovtcCIx98JQa9vlcojPjlBdU5Es1XnkHgc3tlGUq4Zd1KBc~EldBix31rA8OPSVYbV34qykT2lKujv4~DHSBTE1Fvwn9mbfFkiXPc77k~99VKQKAb8tlH7NhYu-eqBxjCJ1tqgBVsjasq0dML2HsUGHf9JzQgMRZ8vpa5yddP5gFhuowYFIHCFgxbrdByrzmNaaOhQCYawsUnrP~tat-t59c5O3XFnGSUQnIPaAWdnr7JEa5Lv9tBQ__"},

            ]
        },
        profile: {
            title: "Profile",
            info: "Basic Information",
            about: "About Me",
            birthTitle: "Birth Day",
            birthDate: "24.03.1996",
            livingTitle: "Living Place",
            livingPlace: "Ankara",
            eduTitle: "Education Status",
            edu: "Hacettepe Unv. Biology License, 2016",
            roleTitle: "Preferred Role",
            role: "Frontend, UI",
            aboutme1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            aboutme2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
        },
        project: {
            title: "Projects",
            projects: [
                {name: "Workintech", image: "https://s3-alpha-sig.figma.com/img/ad50/81bf/69bb4825e42350e768340fdbec09d78b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-clAOBQbxDC~Z69d1Uqlyf6fT9JKf~AiJC84mrL185rAA89NIQzy5lHo2KAOjwLui9lxa~vYMN~7WVEZt9l-gu0zrz-UX70KGi~wQX9WIJEhkCT46ru5MF1BHk0YD8peYO8g-SOEGUe76ylM10eywxWKRBUUsCQOOCzdJh9x~PFQyHae~MsVVtz0~9urMdui8vfOnHKXOWlO16oVWmk04FIwjfieRLNWvq7BPNgNB9MTGmjDLjA3bVXgoEaMR5c5OJn3yk2Q-ykW9uXUbSpVL~wF4xQIQ9L8KlrDT-hyzzVtHP6W4f4PR4Oxj-XpHZyyVgtmePeBCQ1Zv630bKspw__", par: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.", skills: [
                    {skill: "react"},
                    {skill: "redux"},
                    {skill: "vercel"},
                ], links: [
                    {link: "View Site"},
                    {link: "Github"}
                ]},
                {name: "Journey", image: "https://s3-alpha-sig.figma.com/img/600e/630b/a9370e031b441737654465d0f374af51?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DbbbB7utvQbn499o4D2i78qttO38iyzSq3dKSv7LkmNo1DIm9-iTjSAjoXlroPBIkzH17E7WoDGJzBeC2IBn05oUW8rwt77PLlI-yOpPMMQAmLmffpwNu22xpw4H2XBNOidnWR62WYnSjCQcHWccbVIkQXyD6uplA0Ycvlcucl~WEc43RF9VP~-kGuUeOQpe4yWNiOYVCi~QobCr9PwW3tF97Mk5yoDEHKOC-PwAVt2qGm3b7Iq0h45Ffx5Fk-~GGNnjWQqKzVLZWufpeG9vbG1yNkBihRNfl6MNBV5EynRPWUoYYcCPFZ0PzkbC8ds-f1EyoWS1Q8JXJ~vwN6FqyA__", par: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.", skills: [
                    {skill: "react"},
                    {skill: "redux"},
                    {skill: "vercel"},
                ], links: [
                    {link: "View Site"},
                    {link: "Github"}
                ]},

            ],
        },
        footer: {
            title: "Send me a message!",
            par: "Got a question or proposal, or just want to say hello? Go ahead.",
            mail: "almilasucode@gmail.com",
            icons: [
                {icon: "/twitter.svg"},
                {icon: "/codepen.svg"},
                {icon: "/at-sign.svg"},
                {icon: "/instagram.svg"},
            ]
        }
    },
    tr: {
        top: {
            name: "İsim",
            title: "Ben bir Frontend Developer'ım...",
            about: "...harika kullanıcı deneyimiyle sağlam ve ayarlanabilir frontend ürünler tasarlamayı severim.",
            langButton: "FOR ENGLISH",
            modeButton: "GECE MODU",
            lightMode: "GÜNDÜZ MODU",
        },
        skills: {
            title: "Yetenekler",
            apps: [
                {name: "JAVASCRIPT", icon: "https://s3-alpha-sig.figma.com/img/7a34/4b5b/3888c5ad5ffa3a6dba3961306694fe6c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzhFW1qOXmfMjElwyTZplz~NhSh4ZmN3uMiw9SH7yLQOhQMybKDmYLJY28IvFcKhQozY6wyKi9Fab6PlyPBwChtWVyrUrpbLV4tybgUH5C3jnmeMVZFyI1kwZe6gsoFXpWtxJ~tyTS9wn8IQh8hlg3vigKGyA6IaVCxCVdGxn86m6~6ic9NqXkwAylFXe1jhbYXjJBS~ij2iEpmWrVWew-msvrdltWkOvko2YBJoTloalEtwvubUVic~~bQKo09a8bUzS3YOBkzd9wgvCBS3RL7SsojotWPiuA~WOtYD~LpczJ4QPxIQAAakKfM~e~NnwxbD3xWK2XLYnbKVcLjBPg__"},
                {name: "NODE", icon: "https://s3-alpha-sig.figma.com/img/572f/0eae/0c5668f405e1025606253688b8c116ff?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peFRT2c~oiPhl3ZiSc8pSZn1IaeV3qFWX4wDvVvVytdgJTURLNcds2pc6Xp4dX~y1UpbQMyKfoMP1idy22~DqnF8q0V4sUA2CsnpL1AodFXEt~MWAylFRHcsrg2J6KGzdW4aBU-cj~AmIjpg7q3r8AgEoLSoyY5lahKjZj3bA6jKRtqHc8xVTPuj~tMhJOgU6DUck8diFWBRcsWcOhRAwtRRW~dktF~X9k-AduN9JkOSY3oaEMDKER441ega7aOBt5oC4ZV0uQw0xHUlgtYZEwE2kd-xNuz18vMJPFkE2R5FqeSAv4hzo2Hb8n1bY2fsfKFt8e0FySZfriHASUMr~w__"},
                {name: "REACT", icon: "https://s3-alpha-sig.figma.com/img/0360/469c/df5e54b9d53c349009ab14f28de46a4f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akvPA0elBChIuI1w8HqSHC-5Z7N0ZUo41bZBqGPS~ddy14kdpvCLTG6GrahBim2p9SIKpqHwwf5aJJOO0-Kiz17jWU4O1Guqoz1K5eDvX6o~JtYp6QwO7LMQ29~zSIsUdV46XSb0y0Cs4nMLEzhpcGI1Ef5Cq2oB2IceGDjU8NsN8eIfR8lZKPWzQpbky~trJjUaOXX8dT44JP1QKnsF-wBwCP0mzyaDl0ey3K6SXbOCYUfV4ZilaXZ7p~30jATtoA1MCH3IAnQVlRYrWoQ1O~XCuorInqvB0oWEX-3bfr9DdYed1mZbBtTl1J8fzCHa10Jk7qhvHtGVrb8fwi~3Fg__"},
                {name: "VS CODE", icon: "https://s3-alpha-sig.figma.com/img/f9f5/75a2/0b97e8a7e78c66e3ee35178c9339b3df?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=STaif-4qU5Hoc6meIfyhGVyUhYBXwJYx~r~HbSrPIkb9roUbZOS0ZpjgiDLRNSC06oWyoQAmMynvfWwmsLnkOxhR4GEhSRppqeMVXVajAHnRuY0rWiDuBxz2OVzpayjWjK9ua5jdLt9FyNDM6USYy0-b-oGRHprWWVp5FknEYn7BwbYZqya3GyU-ZYhf~iHlRsb1VozXLxsvB2JzfXt58UNvmlzsriA541qZpyrk4LoyZZqyAIBEppAD1sEmf9kYdMOKA3vkH4pLU0qOG72eG8dkg4O6LNPZvXKE5DyxxoypOpB~4MQsEt7p~b8A~9VJGtokxXjzm5Hd5~oX0HaW5Q__"},
                {name: "REDUX", icon: "https://s3-alpha-sig.figma.com/img/9a68/65b3/8c65fa3208025f2cb5752ee876ab6167?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gcv~QjIXzvnX13lKwOEnN~~JaIejVO-evvBeL5tsZgckQS4n~l7H4GY5ubiWqjXz0S4h0wBDL8i1VYm2u2Vni1p~Pbu9x3MUrToariPpfDBh23b3O3mCwuSMUMlkm8OqlfwiplT6n813HmTUDT5EXJPlcd11m1KPmT9rmqQB52YWBWohU~iZbB7jsTeZDbsU2BdRtyXdabGjgeXmtPhLatUy8uLyrW3DS3XrQLDJjwMx3bVrMKrnWwjo8tdoSpyrpMOLxpGY~ZZ3mUFJFC9~s3VaL26HR5mAi4weHIAlKRoaO~z-tc7~7Vf4FWJVSerxuAHsgZn4o3n~o-n1AJCRug__"},
                {name: "FIGMA", icon: "https://s3-alpha-sig.figma.com/img/8376/9568/62c7a95c81c85e20a72e7dd7b1642ddf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J01SLQKesW1C-4jc4tRu99yeVQu5ey5yZrPzgd46eC3lI-AIuHs1XWbkyLPgisKPcvfIJHraZzpRVbkEyYsjevXmvSg9ya0MovtcCIx98JQa9vlcojPjlBdU5Es1XnkHgc3tlGUq4Zd1KBc~EldBix31rA8OPSVYbV34qykT2lKujv4~DHSBTE1Fvwn9mbfFkiXPc77k~99VKQKAb8tlH7NhYu-eqBxjCJ1tqgBVsjasq0dML2HsUGHf9JzQgMRZ8vpa5yddP5gFhuowYFIHCFgxbrdByrzmNaaOhQCYawsUnrP~tat-t59c5O3XFnGSUQnIPaAWdnr7JEa5Lv9tBQ__"},

            ]
        },
        profile: {
            title: "Profil",
            info: "Basit Bilgiler",
            about: "Benim Hakkımda",
            birthTitle: "Doğum Tarihi",
            birthDate: "24.03.1996",
            livingTitle: "İkamet Şehri",
            livingPlace: "Ankara",
            eduTitle: "Eğitim Durumu",
            edu: "Hacettepe Ünv. Biyoloji Lisans, 2016",
            roleTitle: "Tercih Ettiği Rol",
            role: "Frontend, UI",
            aboutme1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            aboutme2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
        },
        project: {
            title: "Projeler",
            projects: [
                {name: "Workintech", image: "https://s3-alpha-sig.figma.com/img/ad50/81bf/69bb4825e42350e768340fdbec09d78b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-clAOBQbxDC~Z69d1Uqlyf6fT9JKf~AiJC84mrL185rAA89NIQzy5lHo2KAOjwLui9lxa~vYMN~7WVEZt9l-gu0zrz-UX70KGi~wQX9WIJEhkCT46ru5MF1BHk0YD8peYO8g-SOEGUe76ylM10eywxWKRBUUsCQOOCzdJh9x~PFQyHae~MsVVtz0~9urMdui8vfOnHKXOWlO16oVWmk04FIwjfieRLNWvq7BPNgNB9MTGmjDLjA3bVXgoEaMR5c5OJn3yk2Q-ykW9uXUbSpVL~wF4xQIQ9L8KlrDT-hyzzVtHP6W4f4PR4Oxj-XpHZyyVgtmePeBCQ1Zv630bKspw__", par: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılar.", skills: [
                    {skill: "react"},
                    {skill: "redux"},
                    {skill: "vercel"},
                ], links: [
                    {link: "Siteyi Görüntüle"},
                    {link: "Github"}
                ]},
                {name: "Journey", image: "https://s3-alpha-sig.figma.com/img/600e/630b/a9370e031b441737654465d0f374af51?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DbbbB7utvQbn499o4D2i78qttO38iyzSq3dKSv7LkmNo1DIm9-iTjSAjoXlroPBIkzH17E7WoDGJzBeC2IBn05oUW8rwt77PLlI-yOpPMMQAmLmffpwNu22xpw4H2XBNOidnWR62WYnSjCQcHWccbVIkQXyD6uplA0Ycvlcucl~WEc43RF9VP~-kGuUeOQpe4yWNiOYVCi~QobCr9PwW3tF97Mk5yoDEHKOC-PwAVt2qGm3b7Iq0h45Ffx5Fk-~GGNnjWQqKzVLZWufpeG9vbG1yNkBihRNfl6MNBV5EynRPWUoYYcCPFZ0PzkbC8ds-f1EyoWS1Q8JXJ~vwN6FqyA__", par: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılar.", skills: [
                    {skill: "react"},
                    {skill: "redux"},
                    {skill: "vercel"},
                ], links: [
                    {link: "Siteyi Görüntüle"},
                    {link: "Github"}
                ]}
            ],
        },
        footer: {
            title: "Bana bir mesaj gönder!",
            par: "Bir sorun veya teklifin, ya da sadece merhaba mı demek istiyorsun? Buyrun.",
            mail: "almilasucode@gmail.com",
            icons: [
                {icon: "/twitter.svg"},
                {icon: "/codepen.svg"},
                {icon: "/at-sign.svg"},
                {icon: "/instagram.svg"},
            ],
        },
    }
}

export default langugaesData;