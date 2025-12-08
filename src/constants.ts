import { Translation } from './types';

export const CONTENT: Record<'en' | 'hi', Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      students: "For Students",
      status: "Case Status",
      contact: "Contact",
      cta: "Consult Now"
    },
    hero: [
      {
        id: 1,
        image: "https://picsum.photos/1920/1080?random=1&grayscale",
        title: "Expert Legal Representation",
        subtitle: "Advocate at Allahabad High Court, Prayagraj. Defending your rights with integrity."
      },
      {
        id: 2,
        image: "https://picsum.photos/1920/1080?random=2",
        title: "Civil & Criminal Litigation",
        subtitle: "Comprehensive legal solutions for complex disputes and criminal defense."
      },
      {
        id: 3,
        image: "https://picsum.photos/1920/1080?random=3&blur=2",
        title: "Family & Matrimonial Law",
        subtitle: "Compassionate handling of sensitive family matters and disputes."
      },
      {
        id: 4,
        image: "https://picsum.photos/1920/1080?random=4",
        title: "Justice for All",
        subtitle: "Committed to upholding the constitution and ensuring fair trials."
      }
    ],
    about: {
      heading: "About Us",
      title: "Trusted Legal Partners in Prayagraj",
      description: [
        "Welcome to Prayagraj Legal Chambers. With over 15 years of dedicated practice at the High Court of Judicature at Allahabad, we have established a reputation for integrity, diligence, and unwavering commitment to justice.",
        "Our chambers specialize in a wide array of legal disciplines, ensuring that whether you are facing a criminal charge, a property dispute, or a complex constitutional matter, you have seasoned expertise by your side. We believe in a client-centric approach, offering personalized legal strategies that prioritize your best interests while maintaining the highest ethical standards."
      ],
      image: "https://picsum.photos/800/1000?random=99&grayscale",
      experienceBadge: "15+ Years of Experience"
    },
    services: {
      heading: "Our Practice Areas",
      subheading: "Comprehensive legal services tailored to your needs",
      readMore: "Learn More",
      showLess: "Show Less",
      items: [
        {
          id: 1,
          icon: "FileText",
          title: "Rental Agreements & Property",
          shortDesc: "Drafting and vetting of rental agreements, lease deeds, and property dispute resolution.",
          fullDesc: "We specialize in the drafting of precise Rental Agreements (Kirayanama) to protect both landlords and tenants. Our services extend to property registration, title verification, and handling eviction suits in the local and High Court.",
          image: "https://picsum.photos/600/400?random=10"
        },
        {
          id: 2,
          icon: "Users",
          title: "Family Disputes",
          shortDesc: "Resolution of matrimonial issues, divorce, child custody, and inheritance matters.",
          fullDesc: "Family disputes require a delicate touch. We provide legal counsel for Divorce, Restitution of Conjugal Rights, Maintenance (125 CrPC), Domestic Violence cases, and partition suits for ancestral property.",
          image: "https://picsum.photos/600/400?random=11"
        },
        {
          id: 3,
          icon: "ShieldAlert",
          title: "Criminal Defense",
          shortDesc: "Representation in bail matters, criminal trials, and appeals at the High Court.",
          fullDesc: "From filing Anticipatory Bail applications to defending the accused in Sessions and High Court. We handle cases related to IPC sections, cybercrime, and cheque bounce (NI Act) cases with aggressive defense strategies.",
          image: "https://picsum.photos/600/400?random=12"
        },
        {
          id: 4,
          icon: "Briefcase",
          title: "Insurance & Accident Claims",
          shortDesc: "Assistance with MACT claims, insurance disputes, and consumer protection.",
          fullDesc: "We help victims of road accidents get their rightful compensation via Motor Accident Claims Tribunal (MACT). We also fight against insurance companies for unfair rejection of life, health, or vehicle insurance claims.",
          image: "https://picsum.photos/600/400?random=13"
        }
      ]
    },
    student: {
      heading: "Free Services for Students",
      description: "Supporting the future of India. We provide pro-bono services for students residing in Prayagraj.",
      badge: "Pro Bono",
      features: [
        "Affidavit Attestation for Scholarships",
        "Document Verification Seals",
        "True Copy Attestation",
        "Legal Career Counseling"
      ]
    },
    caseStatus: {
      heading: "Check Case Status",
      description: "Enter your CNR Number or Case Reference Number to see the latest update.",
      placeholder: "Enter Case Number (e.g., UPHC01...)",
      button: "Search Status",
      resultTitle: "Case Status Result"
    },
    testimonials: {
      heading: "Client Testimonials",
      items: [
        {
          id: 1,
          name: "Rajesh Kumar",
          role: "Business Owner",
          text: "The guidance I received for my property dispute was exceptional. The issue was resolved in the High Court swiftly.",
          image: "https://picsum.photos/100/100?random=20"
        },
        {
          id: 2,
          name: "Priya Sharma",
          role: "Teacher",
          text: "Very supportive during my divorce proceedings. They explained every legal step in Hindi which made me feel comfortable.",
          image: "https://picsum.photos/100/100?random=21"
        },
        {
          id: 3,
          name: "Amit Singh",
          role: "Student",
          text: "I needed my scholarship documents attested urgently. They did it for free as promised. Highly grateful!",
          image: "https://picsum.photos/100/100?random=22"
        }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          id: 1,
          question: "How much do you charge for a consultation?",
          answer: "Our initial consultation fee is nominal. For student services and certain pro-bono cases, we do not charge any fee. Specific case fees depend on the complexity of the matter."
        },
        {
          id: 2,
          question: "Do I need to be personally present for every hearing?",
          answer: "Not necessarily. In the High Court, your advocate represents you. However, for certain stages like evidence or plea recording in lower courts, your presence might be mandatory."
        },
        {
          id: 3,
          question: "Do you handle cases in District Court as well?",
          answer: "Yes, while our primary practice is at the Allahabad High Court, we also take up significant matters in the District Court of Prayagraj."
        },
        {
          id: 4,
          question: "What documents are required for filing a Bail Application?",
          answer: "Typically, you need a copy of the FIR, the rejection order from the lower court, the Vakalatnama, and ID proofs. We will guide you through the specific requirements based on your case."
        },
        {
          id: 5,
          question: "Can I get a rental agreement made online?",
          answer: "We can draft the agreement remotely, but for notarization and stamp duty, physical presence or coordination with our office clerk in Prayagraj is usually required."
        }
      ]
    },
    footer: {
      about: "Senior Advocate practicing at the High Court of Judicature at Allahabad. Dedicated to justice and legal excellence.",
      address: "Chamber No. 09, High Court Compound, Prayagraj, UP, 211001",
      links: "Quick Links",
      rights: "© 2024 Prayagraj Legal Chambers. All Rights Reserved."
    }
  },
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      services: "सेवाएं",
      students: "छात्रों के लिए",
      status: "मुकदमे की स्थिति",
      contact: "संपर्क",
      cta: "सलाह लें"
    },
    hero: [
      {
        id: 1,
        image: "https://picsum.photos/1920/1080?random=1&grayscale",
        title: "विशेषज्ञ कानूनी प्रतिनिधित्व",
        subtitle: "इलाहाबाद उच्च न्यायालय, प्रयागराज में अधिवक्ता। सत्यनिष्ठा के साथ आपके अधिकारों की रक्षा।"
      },
      {
        id: 2,
        image: "https://picsum.photos/1920/1080?random=2",
        title: "दीवानी और आपराधिक मुकदमे",
        subtitle: "जटिल विवादों और आपराधिक बचाव के लिए व्यापक कानूनी समाधान।"
      },
      {
        id: 3,
        image: "https://picsum.photos/1920/1080?random=3&blur=2",
        title: "पारिवारिक और वैवाहिक कानून",
        subtitle: "संवेदनशील पारिवारिक मामलों और विवादों का सहानुभूतिपूर्वक निपटान।"
      },
      {
        id: 4,
        image: "https://picsum.photos/1920/1080?random=4",
        title: "सभी के लिए न्याय",
        subtitle: "संविधान को बनाए रखने और निष्पक्ष सुनवाई सुनिश्चित करने के लिए प्रतिबद्ध।"
      }
    ],
    about: {
      heading: "हमारे बारे में",
      title: "प्रयागराज में विश्वसनीय कानूनी भागीदार",
      description: [
        "प्रयागराज लीगल चैम्बर्स में आपका स्वागत है। इलाहाबाद उच्च न्यायालय में 15 से अधिक वर्षों के समर्पित अभ्यास के साथ, हमने ईमानदारी, परिश्रम और न्याय के प्रति अटूट प्रतिबद्धता के लिए प्रतिष्ठा स्थापित की है।",
        "हमारे चैंबर कानूनी विषयों की एक विस्तृत श्रृंखला में विशेषज्ञता रखते हैं, यह सुनिश्चित करते हुए कि चाहे आप किसी आपराधिक आरोप, संपत्ति विवाद, या जटिल संवैधानिक मामले का सामना कर रहे हों, आपके पास अनुभवी विशेषज्ञता है। हम एक ग्राहक-केंद्रित दृष्टिकोण में विश्वास करते हैं, व्यक्तिगत कानूनी रणनीतियों की पेशकश करते हैं जो उच्चतम नैतिक मानकों को बनाए रखते हुए आपके सर्वोत्तम हितों को प्राथमिकता देती हैं।"
      ],
      image: "https://picsum.photos/800/1000?random=99&grayscale",
      experienceBadge: "15+ वर्षों का अनुभव"
    },
    services: {
      heading: "हमारे कार्य क्षेत्र",
      subheading: "आपकी आवश्यकताओं के अनुरूप व्यापक कानूनी सेवाएं",
      readMore: "और जानें",
      showLess: "कम दिखाएं",
      items: [
        {
          id: 1,
          icon: "FileText",
          title: "किरायानामा और संपत्ति",
          shortDesc: "रेंटल एग्रीमेंट, लीज डीड और संपत्ति विवाद समाधान का मसौदा तैयार करना।",
          fullDesc: "हम मकान मालिकों और किरायेदारों दोनों की सुरक्षा के लिए सटीक रेंटल एग्रीमेंट (किरायानामा) तैयार करने में विशेषज्ञ हैं। हमारी सेवाएं संपत्ति पंजीकरण, शीर्षक सत्यापन और स्थानीय और उच्च न्यायालय में बेदखली के मुकदमों तक फैली हुई हैं।",
          image: "https://picsum.photos/600/400?random=10"
        },
        {
          id: 2,
          icon: "Users",
          title: "पारिवारिक विवाद",
          shortDesc: "वैवाहिक मुद्दों, तलाक, बच्चे की हिरासत और विरासत के मामलों का समाधान।",
          fullDesc: "पारिवारिक विवादों के लिए नाजुक स्पर्श की आवश्यकता होती है। हम तलाक, दांपत्य अधिकारों की बहाली, गुजारा भत्ता (125 CrPC), घरेलू हिंसा के मामलों और पैतृक संपत्ति के लिए विभाजन के मुकदमों के लिए कानूनी सलाह प्रदान करते हैं।",
          image: "https://picsum.photos/600/400?random=11"
        },
        {
          id: 3,
          icon: "ShieldAlert",
          title: "आपराधिक बचाव",
          shortDesc: "जमानत मामलों, आपराधिक मुकदमों और उच्च न्यायालय में अपील में प्रतिनिधित्व।",
          fullDesc: "अग्रिम जमानत याचिका दायर करने से लेकर सत्र और उच्च न्यायालय में आरोपी का बचाव करने तक। हम आक्रामक रक्षा रणनीतियों के साथ आईपीसी धाराओं, साइबर अपराध और चेक बाउंस (एनआई एक्ट) के मामलों को संभालते हैं।",
          image: "https://picsum.photos/600/400?random=12"
        },
        {
          id: 4,
          icon: "Briefcase",
          title: "बीमा और दुर्घटना दावे",
          shortDesc: "एमएसीटी दावों, बीमा विवादों और उपभोक्ता संरक्षण में सहायता।",
          fullDesc: "हम सड़क दुर्घटना के पीड़ितों को मोटर दुर्घटना दावा न्यायाधिकरण (एमएसीटी) के माध्यम से उनका उचित मुआवजा दिलाने में मदद करते हैं। हम जीवन, स्वास्थ्य या वाहन बीमा दावों को अनुचित तरीके से खारिज करने के लिए बीमा कंपनियों के खिलाफ भी लड़ते हैं।",
          image: "https://picsum.photos/600/400?random=13"
        }
      ]
    },
    student: {
      heading: "छात्रों के लिए मुफ्त सेवाएं",
      description: "भारत के भविष्य का समर्थन। हम प्रयागराज में रहने वाले छात्रों के लिए निःशुल्क सेवाएं प्रदान करते हैं।",
      badge: "निःशुल्क सेवा",
      features: [
        "छात्रवृत्ति के लिए शपथ पत्र सत्यापन",
        "दस्तावेज़ सत्यापन मुहर",
        "ट्रू कॉपी सत्यापन",
        "कानूनी करियर परामर्श"
      ]
    },
    caseStatus: {
      heading: "केस की स्थिति जांचें",
      description: "नवीनतम अपडेट देखने के लिए अपना सीएनआर नंबर या केस संदर्भ नंबर दर्ज करें।",
      placeholder: "केस नंबर दर्ज करें (उदा., UPHC01...)",
      button: "स्थिति खोजें",
      resultTitle: "केस स्थिति परिणाम"
    },
    testimonials: {
      heading: "ग्राहक प्रशंसापत्र",
      items: [
        {
          id: 1,
          name: "राजेश कुमार",
          role: "व्यापारी",
          text: "मेरे संपत्ति विवाद के लिए मुझे जो मार्गदर्शन मिला वह असाधारण था। उच्च न्यायालय में मुद्दा तेजी से सुलझा लिया गया।",
          image: "https://picsum.photos/100/100?random=20"
        },
        {
          id: 2,
          name: "प्रिया शर्मा",
          role: "अध्यापिका",
          text: "मेरी तलाक की कार्यवाही के दौरान बहुत सहयोगी रहे। उन्होंने हर कानूनी कदम को हिंदी में समझाया जिससे मुझे सहज महसूस हुआ।",
          image: "https://picsum.photos/100/100?random=21"
        },
        {
          id: 3,
          name: "अमित सिंह",
          role: "छात्र",
          text: "मुझे अपने छात्रवृत्ति दस्तावेजों को तत्काल सत्यापित करने की आवश्यकता थी। उन्होंने वादे के मुताबिक यह मुफ्त में किया। बहुत आभारी हूँ!",
          image: "https://picsum.photos/100/100?random=22"
        }
      ]
    },
    faq: {
      heading: "अक्सर पूछे जाने वाले प्रश्न",
      items: [
        {
          id: 1,
          question: "परामर्श के लिए आपका शुल्क क्या है?",
          answer: "हमारा प्रारंभिक परामर्श शुल्क नाममात्र है। छात्र सेवाओं और कुछ प्रो-बोनो मामलों के लिए, हम कोई शुल्क नहीं लेते हैं। विशिष्ट केस शुल्क मामले की जटिलता पर निर्भर करता है।"
        },
        {
          id: 2,
          question: "क्या मुझे हर सुनवाई में व्यक्तिगत रूप से उपस्थित होने की आवश्यकता है?",
          answer: "ज़रूरी नहीं है। उच्च न्यायालय में, आपका वकील आपका प्रतिनिधित्व करता है। हालाँकि, निचली अदालतों में साक्ष्य या दलील रिकॉर्ड करने जैसे कुछ चरणों के लिए, आपकी उपस्थिति अनिवार्य हो सकती है।"
        },
        {
          id: 3,
          question: "क्या आप जिला न्यायालय में भी मामले देखते हैं?",
          answer: "हाँ, जबकि हमारा मुख्य कार्यक्षेत्र इलाहाबाद उच्च न्यायालय है, हम प्रयागराज के जिला न्यायालय में भी महत्वपूर्ण मामले लेते हैं।"
        },
        {
          id: 4,
          question: "जमानत याचिका दायर करने के लिए किन दस्तावेजों की आवश्यकता होती है?",
          answer: "आमतौर पर, आपको एफआईआर की एक प्रति, निचली अदालत से अस्वीकृति आदेश, वकालतनामा और आईडी प्रूफ की आवश्यकता होती है। हम आपके मामले के आधार पर विशिष्ट आवश्यकताओं के बारे में आपका मार्गदर्शन करेंगे।"
        },
        {
          id: 5,
          question: "क्या मैं ऑनलाइन रेंटल एग्रीमेंट बनवा सकता हूँ?",
          answer: "हम समझौते का मसौदा दूरस्थ रूप से तैयार कर सकते हैं, लेकिन नोटराइजेशन और स्टाम्प शुल्क के लिए, भौतिक उपस्थिति या प्रयागराज में हमारे कार्यालय क्लर्क के साथ समन्वय की आमतौर पर आवश्यकता होती है।"
        }
      ]
    },
    footer: {
      about: "इलाहाबाद उच्च न्यायालय में वरिष्ठ अधिवक्ता। न्याय और कानूनी उत्कृष्टता के लिए समर्पित।",
      address: "चेंबर नंबर 09, हाई कोर्ट कंपाउंड, प्रयागराज, उत्तर प्रदेश, 211001",
      links: "त्वरित लिंक",
      rights: "© 2024 प्रयागराज लीगल चैम्बर्स। सर्वाधिकार सुरक्षित।"
    }
  }
};