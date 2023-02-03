import i18n from "i18next";
import {
    initReactI18next
} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    az: {
        translation: {
            "SHOP": "MAĞAZA",
            "ABOUT": "HAQQIMIZDA",
            "CONTACT": "ƏLAQƏ",
            "ACCOUNT": "HESABIM",
            "WISHLIST": "İSTƏKLƏR",
            "CART": "SƏBƏT",
            "PREVIOUS": "GERİ", 
            "NEXT": "İRƏLİ",
            "The Lawson Collection":"Lawson kolleksiyası",
            "We are happy to introduce the new Lawson Collection. These are three quartz models designed with simplicity and elegance kept in mind. They come in different sizes and colors, and all feature a stainless steel back — leaving enough space for a personalized engraving. The engraving service is complimentary with any watch from the Lawson series.":"Biz yeni Lawson kolleksiyasını təqdim etməkdən məmnunuq. Bunlar sadəlik və zəriflik nəzərə alınmaqla hazırlanmış üç kvars modelidir. Onlar müxtəlif ölçülərdə və rənglərdə gəlir və hamısı paslanmayan poladdan arxaya malikdir - fərdi oyma üçün kifayət qədər yer buraxır. Oyma xidməti Lawson seriyasından istənilən saatla pulsuzdur.",
            "Swiss Essence":"İsveçrəli Əsərlər",
            "The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally one made somewhere in Switzerland. Do you want to know what makes Swiss watches stand out?":"“Yaxşı qol saatı” ifadəsi ilə insanın ağlına gələn ilk assosiasiya təbii olaraq İsveçrənin bir yerində hazırlanmışdır. İsveçrə saatlarının nə ilə fərqləndiyini bilmək istəyirsiniz?",
            "LEARN MORE":"DAHA ƏTRAFLI",
        }
    },
    en: {
        translation: {
            "SHOP": "SHOP",
            "ABOUT": "ABOUT",
            "CONTACT": "CONTACT",
            "ACCOUNT": "ACCOUNT",
            "WISHLIST": "WISHLIST",
            "CART": "CART",
            "PREVIOUS": "PREVIOUS",
            "NEXT": "NEXT",
            "We are happy to introduce the new Lawson Collection. These are three quartz models designed with simplicity and elegance kept in mind. They come in different sizes and colors, and all feature a stainless steel back — leaving enough space for a personalized engraving. The engraving service is complimentary with any watch from the Lawson series.":"We are happy to introduce the new Lawson Collection. These are three quartz models designed with simplicity and elegance kept in mind. They come in different sizes and colors, and all feature a stainless steel back — leaving enough space for a personalized engraving. The engraving service is complimentary with any watch from the Lawson series.",
            "Swiss Essence":"Swiss Essence",
            "The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally one made somewhere in Switzerland. Do you want to know what makes Swiss watches stand out?":"The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally one made somewhere in Switzerland. Do you want to know what makes Swiss watches stand out?",

        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;