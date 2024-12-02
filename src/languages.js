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
        }
    }
}

export default langugaesData;