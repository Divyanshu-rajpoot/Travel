// const mongoose=require('mongoose');
// const State=require("./models/State")

const state = [
    {
        name: "Goa",
        des: " Popularly known as India’s party capital, Goa seduces travellers from all around the globe with its boho beaches, ancient churches, majestic forts and unbeatable nightlife!",
        img: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: [
            {
                name: "Dudhsagar Waterfalls",
                des: "Located inside the Bhagwan Mahaveer Sanctuary and Mollem National Park, this multi-tiered milky white waterfall gushes down from a height of 310 metres, making it Indias fifth-highest waterfall. It is at its maximum glory just after the rains.",
                img: "https://images.unsplash.com/photo-1529588549443-d40e806f583e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.3,
            },
            {
                name: "Baga beach",
                des: "One of the most popular beaches in Goa, Baga Beach offers quirky beach-side shacks and a number of thrilling water sports.",
                img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.5,
            },
            {
                name: "Se Cathedral",
                des: ":Located on the banks of River Mondovi, this 16th Century historic church is a UNESCO World Heritage Site dedicated to St. Catherine of Alexandria.",
                img: "https://images.unsplash.com/photo-1560887665-8a8ab31bc954?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4,
            },
            {
                name: "Salaulim Dam",
                des: "The Salaulim Dam sits on the banks of the Saulim River which is a tributary of the Zuari River. Located 5km from Sanguem Town, it is interesting to note that the entire drinking water of South Goa comes from here. The dam is spread on an area more than 24 sq. km and offers pleasant break from the beaches.",
                img: "https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.1,
            }
        ],
    },
    {
        name: "Madhya Pradesh",
        des: "Madhya Pradesh, located in central India, is known for its rich history, diverse wildlife, and architectural marvels. From ancient temples to national parks, Madhya Pradesh offers a tapestry of cultural and natural wonders.",
        img: "https://images.unsplash.com/photo-1612441012572-25694e6679a4?q=80&fm=jpg&w=2000&fit=max",
        place: [
            {
                name: "Khajuraho Group of Monuments",
                des: "A UNESCO World Heritage Site, the Khajuraho Group of Monuments is famous for its stunning intricately carved temples, depicting various facets of human life and sexuality.",
                img: "https://images.unsplash.com/photo-1570585800808-51c09fdef3cb?q=80&fm=jpg&w=2000&fit=max",
                rating: 4.6
            },
            {
                name: "Bandhavgarh National Park",
                des: "One of India's most famous national parks, Bandhavgarh is known for its high density of Bengal tigers. It also offers rich biodiversity and opportunities for wildlife safaris.",
                img: "https://images.unsplash.com/photo-1534316358919-190c5f8b0f26?q=80&fm=jpg&w=2000&fit=max",
                rating: 4.8
            },
            {
                name: "Sanchi Stupa",
                des: "Located in the town of Sanchi, this ancient Buddhist monument is a UNESCO World Heritage Site. The Great Stupa is one of the oldest stone structures in India, dating back to the 3rd century BCE.",
                img: "https://images.unsplash.com/photo-1586167011415-725988ef13ab?q=80&fm=jpg&w=2000&fit=max",
                rating: 4.4
            },
            {
                name: "Gwalior Fort",
                des: "Perched on a hilltop in the city of Gwalior, this imposing fort complex offers panoramic views of the surrounding area. It houses several palaces, temples, and water tanks.",
                img: "https://images.unsplash.com/photo-1610667233166-ced6b23b291f?q=80&fm=jpg&w=2000&fit=max",
                rating: 4.2
            },
            {
                name: "Pachmarhi",
                des: "Nestled in the Satpura Range, Pachmarhi is a hill station known for its lush forests, cascading waterfalls, and serene surroundings. It's a popular retreat for nature lovers and adventure enthusiasts.",
                img: "https://images.unsplash.com/photo-1604915752867-073e2fe0943a?q=80&fm=jpg&w=2000&fit=max",
                rating: 4.5
            }
        ]
    },
    {
        name: "Kerala",
        des: "Kerala, often referred to as 'God's Own Country', is a tropical paradise located in the southern part of India. With its palm-fringed backwaters, serene beaches, lush hill stations, and vibrant culture, Kerala offers a unique blend of natural beauty and cultural heritage.",
        img: "https://images.unsplash.com/photo-1611553928113-9863b5e7313e?q=80&fm=jpg&w=2000&fit=max",
        place: [
            {
                "name": "Alleppey (Alappuzha)",
                "des": "Famous for its intricate network of backwaters, Alleppey is often called the 'Venice of the East'. Houseboat cruises through the serene backwaters are a highlight of any visit to Kerala.",
                "img": "https://images.unsplash.com/photo-1600180568494-ecc442b07c24?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.7
            },
            {
                "name": "Munnar",
                "des": "Nestled in the Western Ghats, Munnar is a hill station known for its sprawling tea plantations, misty valleys, and scenic beauty. It's a popular destination for honeymooners and nature lovers.",
                "img": "https://images.unsplash.com/photo-1600481067872-dae4985bd9ad?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.8
            },
            {
                "name": "Kochi (Cochin)",
                "des": "A vibrant port city with a rich history, Kochi is known for its colonial architecture, bustling spice markets, and eclectic cuisine influenced by its diverse cultural heritage.",
                "img": "https://images.unsplash.com/photo-1603097041220-84c11e44b76b?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.6
            },
            {
                "name": "Wayanad",
                "des": "Surrounded by lush forests, Wayanad is a nature lover's paradise known for its pristine landscapes, wildlife sanctuaries, and adventurous trekking trails. It offers a perfect escape into the lap of nature.",
                "img": "https://images.unsplash.com/photo-1619475037480-91a1ee09ab5c?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.5
            },
            {
                "name": "Kovalam",
                "des": "Located along the Arabian Sea coast, Kovalam is a popular beach destination known for its golden sands, shallow waters, and palm-fringed shores. It's ideal for swimming, sunbathing, and water sports.",
                "img": "https://images.unsplash.com/photo-1602823305275-eec3da71eb6f?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.4
            }
        ]
    },
    {
        "name": "Rajasthan",
        "des": "Rajasthan, the largest state in India, is synonymous with royalty, grandeur, and vibrant culture. With its majestic forts, opulent palaces, and golden deserts, Rajasthan exudes a timeless charm that bewitches travelers from around the world.",
        "img": "https://images.unsplash.com/photo-1618958298143-02b72ba5bcbb?q=80&fm=jpg&w=2000&fit=max",
        "place": [
            {
                "name": "Jaipur",
                "des": "The capital city of Rajasthan, Jaipur, is known as the 'Pink City' due to its pink-hued buildings. It's famous for its magnificent forts, palaces, vibrant bazaars, and rich cultural heritage.",
                "img": "https://images.unsplash.com/photo-1541252268121-52d8eadd8b5d?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.7
            },
            {
                "name": "Udaipur",
                "des": "Fondly referred to as the 'City of Lakes' and the 'Venice of the East', Udaipur is known for its enchanting lakes, romantic palaces, and scenic surroundings. It's a popular destination for weddings and romantic getaways.",
                "img": "https://images.unsplash.com/photo-1559548331-72ee739d0e7b?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.8
            },
            {
                "name": "Jaisalmer",
                "des": "Rising from the heart of the Thar Desert like a golden mirage, Jaisalmer is famous for its sandstone fort, ornate havelis, and camel safaris. It offers a glimpse into the rich culture and heritage of Rajasthan.",
                "img": "https://images.unsplash.com/photo-1606679788685-bbf2fb9b8de2?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.6
            },
            {
                "name": "Ranthambore National Park",
                "des": "Home to the majestic Bengal tiger, Ranthambore National Park is one of the best places in India to spot these elusive big cats. It also boasts a diverse range of wildlife species and ancient ruins.",
                "img": "https://images.unsplash.com/photo-1513836279014-4969fa3f7e2e?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.5
            },
            {
                "name": "Pushkar",
                "des": "Famous for its sacred Pushkar Lake and Brahma Temple, Pushkar is a holy town that attracts pilgrims and tourists alike. It's also known for its vibrant camel fair, held annually.",
                "img": "https://images.unsplash.com/photo-1602262795852-173d92f9f239?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.4
            }
        ]
    },
    {
        "name": "Uttarakhand",
        "des": "Uttarakhand, often referred to as the 'Land of Gods', is a state in northern India known for its stunning Himalayan landscapes, sacred pilgrimage sites, and adventure sports. From snow-capped peaks to pristine rivers, Uttarakhand offers a haven for nature lovers and spiritual seekers alike.",
        "img": "https://images.unsplash.com/photo-1615543383331-c0022164f4cb?q=80&fm=jpg&w=2000&fit=max",
        "place": [
            {
                "name": "Valley of Flowers National Park",
                "des": "A UNESCO World Heritage Site, the Valley of Flowers is a mesmerizing alpine valley known for its diverse flora, including many rare and endangered species. It blooms with vibrant colors during the monsoon season.",
                "img": "https://images.unsplash.com/photo-1551448098-2b8c24b7b18b?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.7
            },
            {
                "name": "Jim Corbett National Park",
                "des": "India's oldest national park, Jim Corbett is renowned for its population of Bengal tigers and other wildlife species. It offers opportunities for jungle safaris, birdwatching, and nature walks.",
                "img": "https://images.unsplash.com/photo-1605719840439-159744e3081c?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.6
            },
            {
                "name": "Rishikesh",
                "des": "Located on the banks of the Ganges River, Rishikesh is a spiritual hub and adventure capital of India. It's famous for its yoga and meditation centers, as well as thrilling activities like river rafting and bungee jumping.",
                "img": "https://images.unsplash.com/photo-1567216379782-4fc191c978ab?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.5
            },
            {
                "name": "Nainital",
                "des": "Surrounded by mountains and dotted with lakes, Nainital is a picturesque hill station known for its scenic beauty and pleasant climate. Boating on Naini Lake and exploring nearby viewpoints are popular activities.",
                "img": "https://images.unsplash.com/photo-1603121987763-4c4de80e96a7?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.3
            },
            {
                "name": "Mussoorie",
                "des": "Perched atop a horseshoe-shaped ridge, Mussoorie is a charming hill station known for its colonial architecture, misty valleys, and panoramic views of the Himalayas. It's often referred to as the 'Queen of Hills'.",
                "img": "https://images.unsplash.com/photo-1612786830350-5c06fc74e92b?q=80&fm=jpg&w=2000&fit=max",
                "rating": 4.4
            }
        ]
    }

]
module.exports = state;