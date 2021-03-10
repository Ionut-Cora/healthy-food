
// vegetables-page

const vegetablesButton = document.querySelector('#vegetables');
const content = document.querySelector('#content');

const products = [
    {
        title: 'Spinach',
        description: `Spinach is a green leafy vegetable native to Persia. It is part of the Amarantaceae family and is related to beets and quinoa. 
                    The inclusion of spinach in the daily diet brings many benefits to the body - it protects the eyes, reduces oxidative stress and blood pressure, being indicated in many common diseases. 
                    100 grams of raw spinach contains: 23 calories, 91% water, 2.9 grams of protein, 3.6 grams of carbohydrates, 0.4 grams of sugar, 2.2 grams of fiber and 0.4 grams of fat . 
                    Most carbohydrates in spinach are, in fact, insoluble fibers that support the digestive system, prevent constipation and maintain a feeling of satiety.`,
        image: 'https://images.unsplash.com/photo-1580910365145-862a086868c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Carrots',
        description: `Carrot (Daucus carota) is an orange vegetable root. The edible part of the plant is the root. 
                    It is a biennial plant, in the first year the leaves produce food for the plant, and the tuber stores sugars for the plant to bloom in the second year. 
                    The flower shoot reaches almost 1 m in length, with branches with white flowers. 
                    Carrots can be eaten raw, in salads or cooked in soups and dishes. Puree can also be made for newborns. The green stem can also be eaten, although it is not a common practice. 
                    Along with onions and celery, carrots are the most used primary ingredients in food. 
                    Although carrots are low in calories, fat and cholesterol, they supplement the daily intake of nutrients with vitamins and dietary fiber, which nourish the body, 
                    induce the feeling of satiety and maintain the health of the intestinal tract. Vitamin A is the substance used by the liver to flush toxins out of the body.`,
        image: 'https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Broccoli',
        description: `The nutritional profile of this plant is really impressive: it contains soluble and insoluble fiber in large quantities, vitamin C in huge quantities and ignored vitamin K, 
                    which is extremely necessary for good blood circulation. Vitamin K is found in very few foods. 
                    Let's dissect a little green vegetable: 100 grams of broccoli brings you 150% of your daily requirement of vitamin C. 
                    For example, this dose administered daily in case of a cold, shortens the type of manifestation. 
                    Another characteristic of these plants is the composition rich in phytonutrients, substances that significantly reduce the risk of diabetes, cardiovascular disease and cancer, 
                    ie exactly the diseases of modern civilization.`,
        image: 'https://images.unsplash.com/photo-1584868792839-bff69783216a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Garlic',
        description: `Garlic is, therefore, one of the most powerful "weapons" we can have to support the immune system. 
                    It has the ability to stimulate the body's natural production of antibodies and fight infections, destroying hundreds of types of bacteria and viruses. 
                    Many experts call it the most powerful natural antibiotic and often compare its effects to those of penicillin. 
                    Asadar, nu este o noutate ca usturoiul combate eficient afectiunile tractului respirator si ca fortifica imunitatea. 
                    Garlic prevents cardiovascular disease, regulates intestinal transit, prevents cancer and cures streptococcal infections, is also useful in certain female genital diseases, 
                    is effective against acne and hair loss, helps prevent colds and flu.`,
        image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Ginger',
        description: `Ginger (Zingiber officinale) is a plant that has its origins in the tropical forests of South Asia and has been used for centuries both in food, to spice up food, and as a support in integrative medicine. 
                    Ginger is a food with special properties and benefits on the body's health, attested by specialized studies. 
                    From supporting immunity in the fight against a number of bacteria to boosting metabolism, ginger is a reliable help in a number of conditions that many of us have faced so far. 
                    When the ginger root is boiled, the hot taste is more intense and the aroma decreases, because through the boiling process some of the volatile oils are removed. 
                    In Thailand, for example, ginger is grated, then mixed with other spices to make curry paste.`,
        image: 'https://images.unsplash.com/photo-1598404594102-a633f3adaa30?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Asparagus',
        description: `Given that King Louis XIV himself ordered the construction of special solariums to enjoy asparagus all year round, the vegetable thus gaining the title of "food of kings", 
                    we must also find out why this vegetable is so appreciated. Here are the broad benefits of eating asparagus: it detoxifies, has anti-aging properties, is considered an aphrodisiac, 
                    protects against cancer, relieves pain and inflammation in the body, prevents osteoporosis, reduces the risk of heart disease and birth defects. 
                    Per serving, asparagus contains about 288 milligrams of potassium, known for its ability to reduce belly fat, 3 grams of fiber that improves digestion, has only 40 calories, 
                    0 cholesterol or fat, so it can be included in any diet weight loss. According to American specialists from UCLA, asparagus is the number 1 vegetable in detoxification processes.`,
        image: 'https://images.unsplash.com/photo-1562165038-604cba165ce4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Sweet Potatoes',
        description: `Sweet potatoes are considered a food with a low glycemic index, and recent research suggests that they may reduce episodes of hypoglycemia and insulin resistance in people with diabetes. 
                    The fibers contained in sweet potatoes also have a contribution. Because they are rich in dietary fiber, sweet potatoes help prevent constipation and help regulate intestinal transit, so that you have a healthy digestive tract. 
                    Foods such as sweet potatoes, which are rich in both vitamin C and beta-carotene content, provide an increase in immunity, precisely in terms of the strong combination of nutrients.
                    Choline is an extremely important nutrient found in sweet potatoes; it helps in many ways, starting with sleep, muscle movement, learning and memory. 
                    Choline helps maintain the structure of cell membranes, assists in the absorption of fats and reduces chronic inflammation.`,
        image: 'https://images.unsplash.com/photo-1596097558091-548313ceb129?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
];

let product;

vegetablesButton.addEventListener('click', () => {
    content.innerHTML = `
        <div class="container">
            <h1 class="product-type text-center p-5">Vegetables</h1>
            <p class="product-description p-5">
                Vegetable is a generic culinary term that designates any part of a plant commonly consumed by humans as food, being a cultivated or uncultivated plant that is known and appreciated by 
                the culture of the local population, but is not part of the following culinary categories: cereals, fruits, herbs or spices. These plants are appreciated due to their content in nutrients 
                such as hydrocarbons, proteins, vegetable fats, vitamins, minerals, essential oils, the latter having an important role in digestion.
            </p>
        </div>
    `;
    
    for (let i = 0; i < products.length; i += 1) {
        product = products[i];
        content.innerHTML += `
            <div class="container p-5">
                <div>
                    <div class="w-50 mx-auto">
                        <img src="` + product.image + `" class="product-image img-fluid mx-auto d-block">
                    </div>
                    <div class="p-5">
                        <h2 class="product-title text-center">` + product.title + `</h2>                    
                    </div>
                </div>
                <p class="product-description pb-5 mb-0">` + product.description + `</p>         
            </div>
        `;
    }

    content.style.backgroundColor = '#ECF87F';
});

// fruits-page

const fruitsButton = document.querySelector('#fruits');

const fruits = [
    {
        title: 'Grapefruit',
        description: `
            Grapefruits contain a lot of vitamins, fiber and nutrients. They are known for their antioxidants and ability to improve the immune system, the digestive system and lower cholesterol in the body.
            Half of the grapefruit contains 59% of the daily dose of vitamin C. It stimulates the production of white blood cells and also protects leukocytes, which produce antiviral substances.
            Vitamin C is needed to heal a wound. Collagen is also essential for healthy skin and hair. Moreover, vitamin A, also present in grapefruit, helps to develop a healthy tissue, and the high water content helps the skin to be hydrated and elastic.
            Vitamin A is essential for good eyesight. This triggers an electrical signal in the optic nerve, causing color perception and low light vision.
        `,
        image: 'https://images.unsplash.com/photo-1568815783110-8418ce761392?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Pineapple',
        description: `
            Pineapple is a drought-tolerant tropical plant native to America that grows up to 1.5 meters in height. The plant produces several long, oval fruits each season, from March to June. 
            Pineapple fruits contain bromelain, fiber, phytonutrients (coumaric acid, chlorogenic acid), pectins, polysaccharides, potassium, magnesium, iron, manganese, folic acid, vitamin C, B5, B6, B1, antioxidants and polyphenols (beta-carotene). 
            From a medicinal point of view, bromelain is the most valuable compound, able to accelerate the digestion of proteins. Pineapple has anti-inflammatory, detoxifying, antidepressant properties and has an invigorating effect. 
            Pineapple has no fat or cholesterol at all and has only 50 calories per 100 grams, lots of fiber and protein, which makes it ideal in diets.
        `,
        image: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
    },
    {
        title: 'Avocado',
        description: `
            Avocado, with its real name Persea americana, is a tree native to Mexico, whose fruit, which we know much better, is edible. Spherical or pear-like in shape, the fruit has a dark green skin, a buttery consistency, and a woody core inside. 
            The authentic taste, ie that of a fruit ripened in optimal conditions, is a combination of butter, nuts, grassy and earthy aromas. 
            Discovered later by the rest of the world, avocado has become the favorite of nutritionists, who know what they are talking about when they recommend it: this fruit, used in salads, sandwiches or to prepare guacamole, 
            but also for cooking oil, cosmetics and of natural soaps, is rich in protein, healthy fats (monounsaturated), potassium, calcium, magnesium, phosphorus, iron and vitamins A, C, E, K, B1, B2, B3, B6.
        `,
        image: 'https://images.unsplash.com/photo-1590431306482-f700ee050c59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
        title: 'Blueberries',
        description: `
            Blueberries have been used since ancient times for therapeutic purposes, from treating infections to fighting inflammation and joint pain. 
            These small fruits full of healing powers are extremely rich in antioxidants and vitamin C, essential for a strong immune system and to fight environmental toxins. 
            In addition, blueberries also contain B-complex vitamins, vitamins A and E, vitamin K, iron, calcium, manganese, zinc, phosphorus, selenium and copper. 
            Due to this unique mix of vitamins and minerals, blueberries can be called without hesitation some of the healthiest fruits we can include in our diet. 
            Rich in fiber, blueberries are also important for your digestive system. And when we say rich in fiber, we mean 4-5 grams in a single cup of blueberries. 
            If you combine them with whole grains and yogurt, you already have a well-deserved portion of fiber, enough for a day.
        `,
        image: 'https://images.unsplash.com/photo-1606757389667-45c2024f9fa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
        title: 'Apples',
        description: `
            Apple is one of the most popular fruits. It contains an impressive list of essential nutrients that are needed for normal growth and development. 
            Apples contain a low calorie level, 100 g of fresh fruit slices contain only 50 calories.
            Apples do not contain saturated fats and cholesterol, but are rich in dietary fiber (pectin) that prevents the absorption of bad cholesterol (LDL) in the intestines. 
            Dietary fiber also helps protect the lining of the colon from exposure to toxic substances by binding to the causes of colon cancer.
            Apple fruits contain significant amounts of vitamin C and beta-carotene. Vitamin C is a powerful natural antioxidant.
            Apples are rich in antioxidants, phytonutrients, flavonoids and polyphenols. The most important flavonoid in apples is epicatechin. 
            Apples are also rich in tartaric acid which provides a slightly sour aroma. They help the body protect itself from the harmful effects of free radicals.
            In addition, apples are a good source of B-complex vitamins, such as riboflavin, thiamine, and pyridoxine (vitamin B-6). Together, these vitamins help as co-enzymes of metabolism, as well as in various synthetic functions within the body.
            Apples also contain small amounts of minerals such as potassium, phosphorus, calcium.
        `,
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Pomegranate',
        description: `
            Pomegranates are an extremely rich source of antioxidants, the most important of which are polyphenols, of which tannins, ellagic acid and anthocyanins are found in the largest quantities. 
            The presence of antioxidants in the body prevents or delays the process of cellular aging. At the same time, antioxidants also help to alleviate chronic inflammation in the body. 
            The high content of potassium in pomegranates protects the body from kidney problems, but also has other beneficial effects, including lowering the death rate. 
            Fruit, peel and pomegranate leaves have beneficial effects on digestion, relieving stomach pain and eliminating diarrhea. 
            You can consume pomegranate as such, or you can consume tea made from pomegranate leaves to enjoy the positive effects it has on digestion. 
            Pomegranate consumption maintains blood pressure in normal parameters, preventing myocardial infarction and other heart problems. 
            Pomegranate antioxidants also lower "bad" cholesterol (LDL-cholesterol), preventing blood clots from forming in the arteries. 
            Pomegranate has a high iron content, which reduces the unpleasant symptoms of anemia such as exhaustion, dizziness and lack of energy or hearing problems.
        `,
        image: 'https://images.unsplash.com/photo-1580636521086-7b0c742dd567?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Mango',
        description: `
            In 100 grams of fruit we find 60 calories, 0.82 grams of protein, 0.38 grams of fat, 14.98 grams of carbohydrates (of which 13.66 grams of sugar) and 1.6 grams of fiber, 36.4 mg of vitamin C, 
            54 micrograms of vitamin A and 43 micrograms of folic acid. It also contains vitamin B6, vitamin K, potassium, calcium and iron, as well as antioxidants such as zeaxanthin and beta-carotene. 
            Vitamin A, present in the form of beta-carotene, and zeaxanthin help maintain healthy skin and eyes. The fiber in it helps maintain low glucose levels, thus preventing diabetes. 
            Due to the large amount of water and fiber, it helps prevent constipation and maintain a healthy digestive tract. Likewise, digestive enzymes that break down proteins help facilitate digestion. 
            The prebiotic dietary fiber present in mango encourages the development of beneficial bacteria for the body. Gallic acid and vitamin C also protect the body from viruses and strengthen the immune system.
        `,
        image: 'https://images.unsplash.com/photo-1602081593819-65e7a8cee0dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Strawberries',
        description: `
            The strawberries are seasonal fruits, fragrant and tasty, which have a multitude of therapeutic and nutritional benefits. Strawberries are among the top fruits rich in antioxidants 
            (beta-carotene, lutein, ellagic acid, anthocyanins) and are among the richest fruits in vitamin C. They are also rich in calcium, magnesium, potassium and iron, but also rarer minerals such as manganese, zinc, phosphorus, fluorine. 
            The strawberries are red, with an aerial stem, an oval leaf, with a serrated edge, they are fleshy, fragrant and very sweet. For the proper functioning of the nervous system it is good to eat strawberries, they strengthen bones, 
            teeth, increase the body's immunity, have an antibacterial effect and protect the heart and blood vessels. They are extremely beneficial in diseases such as allergies, infections, inflammation, cancer.
        `,
        image: 'https://images.unsplash.com/photo-1564518087238-8d82baa9d7cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Cranberries',
        description: `
            Cranberry extract prevents urinary tract infections, helping to heal mucosal lesions and restoring a proper pH, thus preventing the multiplication of bacteria. At the same time, this extract can be used in parallel with antibiotic 
            treatment, once the infection has already appeared, to accelerate healing. Cranberries have anti-inflammatory effects on the cardiovascular system, but also on the digestive tract. Cranberry phytonutrients are the ones that reduce inflammation. 
            Consumption of cranberries, in any form, reduces inflammation in the gums, preventing dental disease. Also, cranberries eaten regularly reduce the risk of inflammation in the stomach, colon and blood vessels. 
            Antioxidants found in cranberries contribute to the regeneration of mucous membranes throughout the body, preventing health problems of any kind.
        `,
        image: 'https://images.unsplash.com/photo-1515525941374-fe3a8803f768?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Lemons',
        description: `
            Vitamin C in lemon helps skin to glow and kills the bacteria that cause acne. Lemon has a calming effect and helps remove fatigue, agitation, dizziness, nervousness and tension. Inhaling lemon oil increases your ability to concentrate and keeps your mind alert. 
            Lemon can also be used as a room air freshener in offices, to increase employee efficiency. If you feel tense, put a little lemon oil on a handkerchief and inhale. The proven antibacterial and antiviral properties of lemon can speed up the healing process in canker sores. 
            Mix lemon juice with warm water and rinse your mouth with this combination three times a day. It doesn't matter if you feel a burning sensation in the contact between lemon and canker sores, it matters that it does you a lot of good, so persevere in using it. 
            When you have a cold, the healing power of lemon acts both internally, urgently giving vitamin C to suffering cells, and externally through contact between the affected throat and lemon juice.
        `,
        image: 'https://images.unsplash.com/photo-1587496679742-bad502958fbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
];

let fruit;

fruitsButton.addEventListener('click', () => {
    content.innerHTML = `
        <div class="container">
            <h1 class="product-type text-center p-5">Fruits</h1>
            <p class="product-description p-5">
                The positive effects of daily fruit consumption are demonstrated by numerous relevant scientific studies. 
                These include: reducing the risk of heart disease, heart attack and stroke, protection against certain types of cancer, 
                preventing obesity and diabetes, normalizing blood pressure and reducing the risk of kidney disease and bone disease, etc.
            </p>
        </div>
    `;

    for (let i = 0; i < fruits.length; i += 1) {
        fruit = fruits[i];
        content.innerHTML += `
            <div class="container p-5">
                <div>
                    <div class="p-5">
                        <h2 class="product-title text-center">` + fruit.title + `</h2>                    
                    </div>
                    <div class="w-50 mx-auto">
                        <img src="` + fruit.image + `" class="product-image img-fluid mx-auto d-block">
                    </div>
                </div>
                <p class="product-description p-5 mb-0">` + fruit.description + `</p>         
            </div>
        `;
    }

    content.style.backgroundColor = '#ECF87F';
});

// meat-page

const meatButton = document.querySelector('#meat');

const meatProducts = [
    {
        title: 'Pork',
        description: `
            Pork is characterized by a high fat content, but is also an important source of protein, iron and zinc. The amount of unsaturated fat is higher than any other type of meat. It is recommended to eat pork in moderation.
        `,
        image: 'https://images.unsplash.com/photo-1600180786608-28d06391d25c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Beef',
        description: `
            Rich in iron, this type of meat is ideal for anemic people, especially without being cooked for too long. At the same time, this type of meat has a high cholesterol content, 
            so excessive consumption can affect the proper functioning of the body. Veal is harder to digest due to its high collagen content.
        `,
        image: 'https://images.unsplash.com/photo-1613156234812-a6b731051cbc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Lamb',
        description: `
            Lamb is easily absorbed by the body and helps to strengthen bones and prevent anemia, but it is a fatty meat that is difficult to digest. Not recommended for people with digestive problems. 
            Due to the high content of iron, selenium and high caloric intake, this type of meat is recommended for underweight people.
        `,
        image: 'https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80'
    },
    {
        title: 'Chicken',
        description: `
            Chicken meat is rich in vitamins and minerals, with a high content of zinc, iron, magnesium and vitamin B12. The high content of tryptophan, make it ideal for relieving anxiety, depression or even insomnia. 
            Due to the fact that it has a role in reducing appetite, chicken is the most recommended in diets. Chicken meat contains half the fat in the same amount of beef.
        `,
        image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Fish',
        description: `
            Fish is an important source of phosphorus, potassium and iodine and is ideal for people suffering from thyroid disease or cardiovascular disease. 
            Fish meat is a light one that does not subject the body to great efforts in terms of digestion.
        `,
        image: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
];

let meat;

meatButton.addEventListener('click', () => {
    content.innerHTML = `
        <div class="container">
            <h1 class="product-type text-center p-5">Meat</h1>
            <p class="product-description p-5">
                Meat imports for the proper functioning of the body can not be disputed, due to the high content of high-quality protein and minerals, 
                but there is a limit to the recommended daily amount of consumption. Nutritionists generally recommend eating chicken and fish, but urge us not to neglect other types of meat.
            </p>
        </div>
    `;

    for (let i = 0; i < meatProducts.length; i += 1) {
        meat = meatProducts[i];
        content.innerHTML += `
            <div class="container p-5">
                <div>
                    <div class="w-50 mx-auto">
                        <img src="` + meat.image + `" class="product-image img-fluid mx-auto d-block">
                    </div>
                    <div class="p-5">
                        <h2 class="product-title text-center">` + meat.title + `</h2>                    
                    </div>
                </div>
                <p class="product-description pb-5 mb-0">` + meat.description + `</p>         
            </div>
        `;
    }

    content.style.backgroundColor = '#ECF87F';
});
