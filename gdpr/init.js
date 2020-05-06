/*

  General Data Protection Regulation (GDPR) Notice
  Developer: Michael "Spell" Spellacy, Email: michael.spellacy@tmp.com, Twitter: @spellacy, GitHub: michaelspellacy

*/

(function() {

  var magicBulletScript = document.getElementById("tmp-magic-bullet");
  var gdprBody = document.body;

  // Data Attributes

  var gdprBannerTop = magicBulletScript.getAttribute("data-gdpr-banner-top");
  var gdprBannerRemove = magicBulletScript.getAttribute("data-gdpr-banner-remove");
  var gdprButtonColor = magicBulletScript.getAttribute("data-gdpr-button-color");
  var gdprButtonColorText = magicBulletScript.getAttribute("data-gdpr-button-color-text");
  var gdprButtonText = magicBulletScript.getAttribute("data-gdpr-button-text");
  var gdprClientName = magicBulletScript.getAttribute("data-gdpr-client-name");
  var gdprCookieManageURL = magicBulletScript.getAttribute("data-gdpr-cookie-mgr-url");
  var gdprCustomMessage = magicBulletScript.getAttribute("data-gdpr-custom-message");
  var gdprCustomFormMessage = magicBulletScript.getAttribute("data-gdpr-custom-form-message");
  var gdprDateExpire = magicBulletScript.getAttribute("data-gdpr-date-expire");
  var gdprDomainName = magicBulletScript.getAttribute("data-gdpr-domain");
  var gdprExplicitConsent = magicBulletScript.getAttribute("data-gdpr-explicit-consent");
  var gdprFontSize = magicBulletScript.getAttribute("data-gdpr-font-size");
  var gdprGACustomCategory = magicBulletScript.getAttribute("data-gdpr-ga-custom-category");
  var gdprGACustomLabel = magicBulletScript.getAttribute("data-gdpr-ga-custom-label");
  var gdprLanguage =  magicBulletScript.getAttribute("data-gdpr-language");
  var gdprNewWindow = magicBulletScript.getAttribute("data-gdpr-new-window");
  var gdprNoticeColor = magicBulletScript.getAttribute("data-gdpr-notice-color");
  var gdprNoticeColorText = magicBulletScript.getAttribute("data-gdpr-notice-text-color");
  var gdprPolicyURL = magicBulletScript.getAttribute("data-gdpr-policy-url");
  var gdprTextAlign = magicBulletScript.getAttribute("data-gdpr-text-align");
  var gdprFormBypass = magicBulletScript.getAttribute("data-gdpr-form-bypass");
  var gdprzIndex = magicBulletScript.getAttribute("data-gdpr-z-index");

  // Targeted TalentBrew Elements

  var gdprFormMessage = document.getElementsByClassName("gdpr-eu-tmp-notice");

  var gdprDataFormSubmitBtn = document.querySelectorAll(".data-form:not([data-gdpr-form-msg-exception]) .form-field.submit");

  var gdprPageRefresh = performance.navigation.type; // Not used now

  // Add GDPR hook for implementation team. May come in handy.

  gdprBody.classList.add("magic-bullet-gdpr");

  // Helper: Get Cookie(s)

  function getCookie(name) {

    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value !== null) ? unescape(value[1]):null;

  }

  // Adding to Data Layer, if it exists, is done for both passive and explicit consent.
  // You can use Google Tag Assistant to view the new variables being set (https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en)
  // If client requires that we disable specific functionality or tracking based on user acceptance, then the SEO team
  // must be instructed to leverage the "Privacy Consent" variable instead of the system default, GDPR Consent, which is ignored
  // by this script.

  function setDataLayer(timestamp) {

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({

      "Privacy Consent": timestamp

    });

  }

  function setConsent() {

    var expDate = new Date();
    var consentRawDate = new Date();
    var consentDate = consentRawDate.toISOString();
    var convertDate = Date.parse(consentDate);

    // Some clients want cookies to expire after one day, so we'll accomodate that request...

    if(gdprDateExpire !== null) {

      expDate.setDate(expDate.getDate() + 1);

    } else {

      expDate.setDate(expDate.getDate() + 30);

    }

    // Get custom domain name, if not present, then load in default domain.

    if(gdprDomainName !== null) {

      if (location.protocol !== "https:") {

        document.cookie = "ConsentCapture=" + consentDate + "; expires=" + expDate + "; domain=" + gdprDomainName + "; path=/";

      } else {

        document.cookie = "ConsentCapture=" + consentDate + "; Secure; SameSite=None; expires=" + expDate + "; domain=" + gdprDomainName + "; path=/";

      }

    } else {

      if (location.protocol !== "https:") {

        document.cookie = "ConsentCapture=" + consentDate + "; expires=" + expDate + "; path=/";

      } else {

        document.cookie = "ConsentCapture=" + consentDate + "; Secure; SameSite=None; expires=" + expDate + "; path=/";

      }

    }

    setDataLayer(convertDate);

  }

  function setBanner() {

    var expDate = new Date();

    // Some clients want cookies to expire after one day, so we'll accomodate that request...

    if(gdprDateExpire !== null) {

      expDate.setDate(expDate.getDate() + 1);

    } else {

      expDate.setDate(expDate.getDate() + 30);

    }

    // Get custom domain name, if not present, then load in default domain.

    if(gdprDomainName !== null) {

      if (location.protocol !== "https:") {

        document.cookie = "BannerDisplayed=true; expires=" + expDate + "; domain=" + gdprDomainName + "; path=/";

      } else {

        document.cookie = "BannerDisplayed=true; Secure; SameSite=None; expires=" + expDate + "; domain=" + gdprDomainName + "; path=/";

      }

    } else {

      if (location.protocol !== "https:") {

        document.cookie = "BannerDisplayed=true; expires=" + expDate + "; path=/";

      } else {

        document.cookie = "BannerDisplayed=true; Secure; SameSite=None; expires=" + expDate + "; path=/";

      }

    }

  }

  // Let's get our cookies...

  if(gdprBannerRemove === null) {

    var bannerDisplayed = getCookie("BannerDisplayed");
    var consentCapture = getCookie("ConsentCapture");

    // While the default behavior for the cookie is passive consent, there may be times
    // where we want to explicitly have user click on "Accept".
    // So we bypass default behavior by adding data-gdpr-explicit-consent

    if(gdprExplicitConsent === null) {

      // If explicit consent not needed, check if bannerDisplayed exists. If not, then create it and set it's value to "yes".
      // It's presense on other pages, thoughout user session, will ensure that notice never appears again.

      if (bannerDisplayed === null) {

        setBanner();

      }

      // If bannerDisplayed exists and consent has NOT been set, then set consent when user visits another page.

      if(bannerDisplayed !== null && consentCapture === null) {

        setConsent();

      }

    }

    // If consent has been given, then set bannerDisplayed

    if(consentCapture !== null) {

      setBanner();

      // We need to always be sending variable to Data Layer on each page load, so let's grab that from ConsentCapture cookie

      var userConsentedOn = Date.parse(consentCapture);

      setDataLayer(userConsentedOn);

    }

    // Remove Alert

    var removeAlert = function() {

      // Remove Alert

      gdprBody.removeChild(gdprContainer);

      // Set Cookie

    setConsent();

    };

  }

  if (gdprCookieManageURL !== null) {

    var gdprTrusteURL = gdprCookieManageURL;

  } else {

    var gdprTrusteURL = "https://preferences-mgr.truste.com/";

  }

  // Languages

  if (gdprLanguage === "ar") {

    // Arabic

    var gdprMessage = "نستخدم ملفات تعريف الارتباط وتقنيات التتبّع الأخرى للمساعدة في عملية التنقل وتحسين المنتجات والخدمات، وكذلك المساعدة في جهود التسويق، وتقديم المحتوى من الأطراف الخارجية. باستمرارك في استخدام هذا الموقع، فأنت توافق على استخدامنا لملفات تعريف الارتباط وفقًا لـ<a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>سياسة الخصوصية <span id='gdpr-a11y-message' class='visually-hidden'>(يفتح هذا المحتوى في نافذة جديدة)</span></a>. للتحكم في تفضيلات ملفات تعريف الارتباط عند الأطراف الخارجية، <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>انقر هنا <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(يفتح هذا المحتوى في نافذة جديدة)</span></a>.";

    var gdprConsentBtn = "قبول";

    var formMessage = "بتقديمك لمعلوماتك، فأنت تُقر بأنّك قرأت <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>سياسة الخصوصية الخاصة بنا <span class='visually-hidden'>(يفتح هذا المحتوى في نافذة جديدة)</span></a> وتوافق على تلقّي مراسلات عبر البريد الإلكتروني من  " + gdprClientName + ".";

  } else if (gdprLanguage === "cs") {

    // Czech

    var gdprMessage = "Používáme soubory cookies a jiné sledovací technologie, abychom vám pomohli s orientací na našich stránkách, zlepšili naše produkty a služby, podpořili naše marketingové úsilí a poskytli vám obsah od třetích stran. Dalším využíváním těchto stránek souhlasíte s tím, jak používáme soubory cookies v souladu s našimi <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>zásadami o ochraně soukromí <span id='gdpr-a11y-message' class='visually-hidden'>(tento obsah se otevře v novém okně)</span></a>. Abyste mohli spravovat preference třetích stran ohledně souborů cookies, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>klikněte zde <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(tento obsah se otevře v novém okně)</span></a>.";

    var gdprConsentBtn = "Přijmout";

    var formMessage = "Odesláním vašich informací potvrzujete, že jste si přečetli naše <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>zásady o ochraně soukromí <span class='visually-hidden'>(tento obsah se otevře v novém okně)</span></a> a souhlasíte s tím, že obdržíte e-mailové zprávy od " + gdprClientName + ".";

  } else if (gdprLanguage === "da") {

    // Danish

    var gdprMessage = "Vi bruger cookies og anden sporingsteknologi til at hjælpe med navigation, forbedring af vores produkter og tjenester, hjælpe med vores markedsføring og levere indhold fra tredjeparter. Ved at fortsætte din brug af dette websted giver du dit samtykke til vores brug af cookies i overensstemmelse med vores <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>privatlivspolitik <span id='gdpr-a11y-message' class='visually-hidden'>(dette indhold åbnes i et nyt vindue)</span></a>. Hvis du vil administrere dine indstillinger for tredjepartscookies, skal du <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>klikke her <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(dette indhold åbnes i et nyt vindue)</span></a>.";

    var gdprConsentBtn = "Accepter";

    var formMessage = "Ved at indsende dine oplysninger bekræfter du, at du har læst vores <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privatlivspolitik <span class='visually-hidden'>(dette indhold åbnes i et nyt vindue)</span></a> og giver dit samtykke til at modtage e-mails fra " + gdprClientName + ".";

  } else if (gdprLanguage === "de") {

    // German

    var gdprMessage = "Wir verwenden Cookies und andere Tracking-Technologien zur Unterstützung der Navigation, zur Verbesserung unserer Produkte und Dienstleistungen, zur Unterstützung unserer Marketingaktivitäten und zur Bereitstellung von Inhalten von Dritten. Durch die weitere Nutzung dieser Website erklären Sie sich mit der Verwendung von Cookies gemäß unserer <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>Datenschutzrichtlinie <span id='gdpr-a11y-message' class='visually-hidden'>(dieser Inhalt öffnet sich in einem neuen Fenster)</span></a>. einverstanden. Um die Cookie-Einstellungen von Drittanbietern zu verwalten, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>klicken Sie hier <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(dieser Inhalt öffnet sich in einem neuen Fenster)</span></a>.";

    var gdprConsentBtn = "Zustimmen";

    var formMessage = "Durch Absenden Ihrer Daten bestätigen Sie, dass Sie unsere <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>Datenschutzerklärung <span class='visually-hidden'>(dieser Inhalt öffnet sich in einem neuen Fenster)</span></a> gelesen haben und damit einverstanden sind, E-Mail-Kommunikation von " + gdprClientName + " zu erhalten.";

  } else if (gdprLanguage === "es") {

    // Spanish

    var gdprMessage = "Utilizamos cookies y otras tecnologías de seguimiento para ayudar con la navegación, mejorar nuestros productos y servicios, ayudar con nuestras estrategias de marketing y proporcionar contenido de terceros. Si sigue utilizando este sitio, acepta nuestro uso de cookies de acuerdo con nuestra <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>política de privacidad <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(este contenido se abre en una nueva ventana)</span></a>. Para administrar las preferencias de cookies de terceros, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>haga clic aquí <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(este contenido se abre en una nueva ventana)</span></a>.";

    var gdprConsentBtn = "Aceptar";

    var formMessage = "Al enviar su información, reconoce que ha leído nuestra <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>política de privacidad <span class='visually-hidden'>(este contenido se abre en una nueva ventana)</span></a> y acepta recibir comunicaciones por correo electrónico de " + gdprClientName + ".";

  } else if (gdprLanguage === "es-mx") {

    // Spanish (Mexico)

    var gdprMessage = "Usamos cookies y otras tecnologías de rastreo para facilitar la navegación, mejorar nuestros productos y servicios, facilitar nuestros esfuerzos de marketing y brindar contenido de terceros. Al continuar utilizando este sitio, acepta el uso de las cookies de acuerdo a nuestra <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>política de privacidad <span id='gdpr-a11y-message' class='visually-hidden'>(el contenido se abre en una nueva ventana)</span></a>. Para controlar sus preferencias con respecto a las cookies de terceros, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>haga clic aquí <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(el contenido se abre en una nueva ventana)</span></a>.";

    var gdprConsentBtn = "Aceptar";

    var formMessage = "Al enviar sus datos, usted reconoce que ha leído nuestra <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>política de privacidad <span class='visually-hidden'>(el contenido se abre en una nueva ventana)</span></a> y acepta recibir comunicaciones por correo electrónico de " + gdprClientName + ".";

  } else if (gdprLanguage === "fr") {

    // French

    var gdprMessage = "Nous utilisons des cookies et d’autres technologies de suivi afin de faciliter la navigation, d’améliorer nos produits et nos services, de soutenir nos efforts de marketing et de fournir du contenu provenant de tiers. En continuant à utiliser ce site, vous acceptez l’utilisation des cookies conformément à notre <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>politique de confidentialité <span id='gdpr-a11y-message' class='visually-hidden'>(ce contenu s’ouvre dans une nouvelle fenêtre)</span></a>. Afin de gérer vos préférences concernant les cookies de tiers, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>cliquez ici <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(ce contenu s’ouvre dans une nouvelle fenêtre)</span></a>.";

    var gdprConsentBtn = "Accepter";

    var formMessage = "En soumettant vos informations, vous reconnaissez avoir lu notre <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>politique de confidentialité <span class='visually-hidden'>(ce contenu s’ouvre dans une nouvelle fenêtre)</span></a> et acceptez de recevoir des communications par e-mail de la part de " + gdprClientName + ".";

  } else if (gdprLanguage === "fr-ch") {

    // French (Canadian)

    var gdprMessage = "Nous utilisons des témoins et d’autres technologies de pistage pour faciliter la navigation, améliorer nos produits et services, appuyer nos efforts de marketing et fournir du contenu provenant de tiers. En continuant d’utiliser ce site, vous acceptez que des témoins soient utilisés conformément à notre <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>politique de confidentialité <span id='gdpr-a11y-message' class='visually-hidden'>(ce contenu ouvre dans une nouvelle fenêtre)</span></a>. Pour gérer vos préférences en matière de témoins tiers, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>cliquez ici <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(ce contenu ouvre dans une nouvelle fenêtre)</span></a>.";

    var gdprConsentBtn = "Accepter";

    var formMessage = "En soumettant vos renseignements, vous reconnaissez avoir lu notre <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>politique de confidentialité <span class='visually-hidden'>(ce contenu ouvre dans une nouvelle fenêtre)</span></a> et vous consentez à recevoir des communications par courriel de la part de " + gdprClientName + ".";

  } else if (gdprLanguage === "hu") {

    // Hungarian

    var gdprMessage = "A navigáció segítéséhez, termékeink és szolgáltatásaink fejlesztéséhez, marketingtevékenységeink támogatásához és harmadik felek tartalmainak megjelenítéséhez cookie-kat használunk. Az oldal használatának folytatásával Ön elfogadja, hogy – <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>adatvédelmi irányelveinknek <span id='gdpr-a11y-message' class='visually-hidden'>(ez a tartalom új ablakban nyílik meg)</span></a>megfelelően – cookie-kat használunk. A harmadik felekhez kapcsolódó cookie-beállítások kezeléséhez <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>kattintson ide <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(ez a tartalom új ablakban nyílik meg)</span></a>.";

    var gdprConsentBtn = "Elfogadom";

    var formMessage = "Az adatok beküldésével Ön nyilatkozik, hogy elolvasta <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>adatvédelmi irányelveinket <span class='visually-hidden'>(ez a tartalom új ablakban nyílik meg)</span></a> e-mailben kommunikáljon Önnel " + gdprClientName + ".";

  } else if (gdprLanguage === "it") {

    // Italian

    var gdprMessage = "Usiamo cookie e altre tecnologie di monitoraggio per agevolare la navigazione, migliorare i nostri prodotti e servizi, supportare le nostre iniziative di marketing e fornire contenuti di parti terze. Continuando a usare questo sito, accetti il nostro uso dei cookie come descritto nella nostra <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>politica sulla privacy <span id='gdpr-a11y-message' class='visually-hidden'>(questo contenuto si apre in una nuova finestra)</span></a>. Per gestire le preferenze relative ai cookie di parti terze, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>fai clic qui <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(questo contenuto si apre in una nuova finestra)</span></a>.";

    var gdprConsentBtn = "Accetta";

    var formMessage = "Inviando le tue informazioni, dichiari aver letto la nostra <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>politica sulla privacy <span class='visually-hidden'>(questo contenuto si apre in una nuova finestra)</span></a> e accetti di ricevere comunicazioni via e-mail da " + gdprClientName + ".";

  } else if (gdprLanguage === "jp") {

    // Japanese

    var gdprMessage = "当社はクッキーやその他の追跡技術を使用することで、ナビゲーション、当社製品およびサービスの改善、および当社のマーケティング活動に役立てると同時に、サードパーティからのコンテンツの提供を行っています。このサイトを使用し続けることで、当社の <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>プライバシーポリシー <span id='gdpr-a11y-message' class='visually-hidden'>（新しいウィンドウでコンテンツが開きます）</span></a> に基づく、当社によるクッキーの使用に同意することとなります。サードパーティクッキーの設定を管理するには、<a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>こちらをクリック <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>（新しいウィンドウでコンテンツが開きます）</span></a> してください。";

    var gdprConsentBtn = "同意する";

    var formMessage = "この情報を提出することで、当社の <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>プライバシーポリシー <span class='visually-hidden'>（新しいウィンドウでコンテンツが開きます）</span></a> を読んだこと、また " + gdprClientName + " からメールでのメッセージを受け取ることに同意することとなります。";

  } else if (gdprLanguage === "ko") {

    // Korean

    var gdprMessage = "당사는 탐색하는데 도움을 주고, 당사의 제품 및 서비스를 개선하고, 마케팅 노력을 지원하고, 제3자로부터의 내용을 제공하기 위해 쿠키 및 다른 추적 기술들을 사용합니다. 이 사이트를 계속 사용함으로써 귀하는 당사의 <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>개인정보 보호 정책 <span id='gdpr-a11y-message' class='visually-hidden'>(이 내용은 새로운 창에서 열립니다)</span></a>에 따라 당사가 쿠키를 사용하는 것에 동의하는 것입니다. 제3자 쿠키 기본설정을 관리하기 위해서, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>여기를 클릭하십시오 <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(이 내용은 새로운 창에서 열립니다)</span></a>.";

    var gdprConsentBtn = "동의";

    var formMessage = "귀하의 정보를 제출함으로써 귀하는 당사의 <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>개인정보 보호 정책 <span class='visually-hidden'>(이 내용은 새로운 창에서 열립니다)</span></a> 을 읽었으며 %%로부터 이메일 통지를 받는 것에 동의한다는 것을 인정하는 것입니다 " + gdprClientName + ".";

  } else if (gdprLanguage === "lt") {

    // Lithuanian

    var gdprMessage = "Naudojame slapukus ir kitas sekimo technologijas, kad palengvintume naršymą, pagerintume savo produktus bei paslaugas, prisidėtume prie rinkodaros pastangų ir teiktume turinį trečiosioms šalims. Toliau naudodamiesi šia svetaine sutinkate su mūsų slapukų naudojimu pagal mūsų <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>privatumo politiką <span id='gdpr-a11y-message' class='visually-hidden'>(atsiveria naujame lange)</span></a>. Norėdami pakeisti trečiųjų šalių slapukų parinktis, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>spustelėkite <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(atsiveria naujame lange)</span></a>.";

    var gdprConsentBtn = "Sutikti";

    var formMessage = "Pateikdami savo duomenis patvirtinate, kad perskaitėte mūsų <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privatumo taisykles <span class='visually-hidden'>(atsiveria naujame lange)</span></a>  ir sutinkate gauti pranešimą el. paštu iš " + gdprClientName + ".";

  } else if(gdprLanguage === "nl") {

    // Dutch

    var gdprMessage = "We gebruiken cookies en andere trackingstechnologieën om te helpen met de navigatie, het verbeteren van onze producten en diensten, het assisteren bij onze marketinginspanningen, en het leveren van inhoud van derden. Door deze website te blijven gebruiken gaat u akkoord met ons gebruik van cookies overeenkomstig ons <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>privacybeleid <span id='gdpr-a11y-message' class='visually-hidden'>(deze inhoud wordt in een nieuw venster geopend)</span></a>. <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>Klik hier <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(deze inhoud wordt in een nieuw venster geopend)</span></a> om de cookie-voorkeuren van derden te beheren.";

    var gdprConsentBtn = "Accepteren";

    var formMessage = "Door uw informatie in te dienen, erkent u dat u ons <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacybeleid gelezen hebt <span class='visually-hidden'>(deze inhoud wordt in een nieuw venster geopend)</span></a> en dat u toestemming geeft om e-mailcommunicatie van " + gdprClientName + " te ontvangen.";

  } else if(gdprLanguage === "nl-be") {

    // Dutch (Belgium)

    var gdprMessage = "We gebruiken cookies en andere trackingstechnologieën om te helpen met de navigatie, het verbeteren van onze producten en diensten, het assisteren bij onze marketinginspanningen, en het leveren van inhoud van derden. Door deze website te blijven gebruiken gaat u akkoord met ons gebruik van cookies overeenkomstig ons <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>privacybeleid <span id='gdpr-a11y-message' class='visually-hidden'>(deze inhoud wordt in een nieuw venster geopend)</span></a>. <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>Klik hier <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(deze inhoud wordt in een nieuw venster geopend)</span></a> om de cookie-voorkeuren van derden te beheren.";

    var gdprConsentBtn = "Accepteren";

    var formMessage = "Door uw informatie in te dienen, erkent u dat u ons <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacybeleid gelezen hebt <span class='visually-hidden'>(deze inhoud wordt in een nieuw venster geopend)</span></a> en dat u toestemming geeft om e-mailcommunicatie van " + gdprClientName + " te ontvangen.";

  } else if (gdprLanguage === "pl") {

    // Polish

    var gdprMessage = "Używamy plików cookie i innych technologii śledzenia, aby pomóc w nawigacji, ulepszać nasze produkty i usługi, wspomagać nasze działania marketingowe i dostarczać treści od osób trzecich. Kontynuując korzystanie z tej witryny, zgadzasz się na użycie plików cookie zgodnie z naszą <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>polityką prywatności <span id='gdpr-a11y-message' class='visually-hidden'>(ta zawartość otwiera się w nowym oknie)</span></a>. Aby zarządzać preferencjami plików cookie stron trzecich, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>kliknij tutaj <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(ta zawartość otwiera się w nowym oknie)</span></a>.";

    var gdprConsentBtn = "Akceptuj";

    var formMessage = "Przesyłając informacje, potwierdzasz, że zapoznałeś(-aś) się z naszą <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>polityką prywatności <span class='visually-hidden'>(ta zawartość otwiera się w nowym oknie)</span></a> i wyrażasz zgodę na otrzymywanie wiadomości e-mail od " + gdprClientName + ".";

  } else if (gdprLanguage === "pt") {

    // Portuguese

    var gdprMessage = "Utilizamos cookies e outras tecnologias de seguimento para ajudar na navegação, melhorar os nossos produtos e serviços, apoiar os nossos esforços de marketing e fornecer conteúdos de terceiros. Ao continuar a utilizar este website, o utilizador concorda com a nossa utilização de cookies de acordo com a nossa <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>política de privacidade <span id='gdpr-a11y-message' class='visually-hidden'>(este conteúdo abre numa janela nova)</span></a>. Para gerir as preferências de cookies de terceiros, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>clique aqui <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(este conteúdo abre numa janela nova)</span></a>.";

    var gdprConsentBtn = "Aceitar";

    var formMessage = "Ao submeter as suas informações, confirma que leu a nossa <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>política de privacidade <span class='visually-hidden'>(este conteúdo abre numa janela nova)</span></a> e aceita receber comunicações por e mail de " + gdprClientName + ".";

  } else if (gdprLanguage === "pt-br") {

    //  Portuguese (Brazilian)

    var gdprMessage = "Usamos cookies e outras tecnologias de rastreamento para auxiliar na navegação, aprimorar nossos produtos e serviços, ajudar em nossos esforços de marketing e fornecer conteúdo terceirizado. Ao continuar utilizando este site, você concorda com o uso de cookies de acordo com nossa <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>política de privacidade <span id='gdpr-a11y-message' class='visually-hidden'>(este conteúdo abre em uma nova janela)</span></a>. Para gerenciar as preferências de cookies de terceiros, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>clique aqui <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(este conteúdo abre em uma nova janela)</span></a>.";

    var gdprConsentBtn = "Aceitar";

    var formMessage = "Ao enviar suas informações, você reconhece que leu nossa <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>política de privacidade <span class='visually-hidden'>(este conteúdo abre em uma nova janela)</span></a> e consente em receber comunicações por e-mail de " + gdprClientName + ".";

  } else if (gdprLanguage === "ru") {

    // Russian

    var gdprMessage = "Мы используем файлы cookie и другие технологии отслеживания действий пользователя, чтобы упростить навигацию, улучшить наши продукты и услуги, стимулировать сбыт и предложить контент третьих сторон. Продолжая использовать данный сайт, вы соглашаетесь на использование файлов cookie в соответствии с нашей <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>политикой конфиденциальности <span id='gdpr-a11y-message' class='visually-hidden'>(содержимое откроется в новом окне)</span></a>. Для изменения настроек сторонних файлов cookie <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>нажмите здесь <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(содержимое откроется в новом окне)</span></a>.";

    var gdprConsentBtn = "принять";

    var formMessage = "Предоставляя свои данные, вы подтверждаете, что ознакомились с нашей <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>политикой конфиденциальности <span class='visually-hidden'>(содержимое откроется в новом окне)</span></a> и согласны получать электронные сообщения от " + gdprClientName + ".";

  } else if (gdprLanguage === "sv") {

    // Swedish

    var gdprMessage = "Vi använder cookies och annan spårningsteknik för att hjälpa till med att navigera, förbättra våra produkter och tjänster, hjälpa till med vår marknadsföring samt tillhandahålla innehåll från tredje part. Genom att fortsätta använda denna webbplats godkänner du vår användning av cookies i enlighet med vår <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>sekretesspolicy <span id='gdpr-a11y-message' class='visually-hidden'>(det här innehållet öppnas i ett nytt fönster)</span></a>. För att hantera inställningar för cookies från tredje part, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>klicka här <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(det här innehållet öppnas i ett nytt fönster)</span></a>.";

    var gdprConsentBtn = "Acceptera";

    var formMessage = "Genom att skicka in din information bekräftar du att du har läst vår <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>sekretesspolicy <span class='visually-hidden'>(det här innehållet öppnas i ett nytt fönster)</span></a> och samtycker till att ta emot e-postmeddelanden från " + gdprClientName + ".";

  } else if (gdprLanguage === "tl") {

    // Tagalog (Filipino)

    var gdprMessage = "Gumagamit kami ng cookies at iba pang mga teknolohiya sa pagsubaybay upang tumulong sa pag-navigate, pahusayin ang aming mga produkto at serbisyo, tumulong sa aming mga pagsisikap sa marketing, at magbigay ng content mula sa mga third party. Sa pamamagitan ng patuloy na paggamit sa site na ito, sumasang-ayon ka sa aming paggamit ng cookies alinsunod sa aming <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>patakaran sa privacy <span id='gdpr-a11y-message' class='visually-hidden'>(bubukas sa bagong window ang content na ito)</span></a>. Para pamahalaan ang mga kagustuhan sa cookie ng third-party, <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>mag-click dito <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(bubukas sa bagong window ang content na ito)</span></a>.";

    var gdprConsentBtn = "Tanggapin";

    var formMessage = "Sa pamamagitan ng pagsusumite ng iyong impormasyon, kinikilala mo na binasa mo ang aming <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>patakaran sa privacy <span class='visually-hidden'>(bubukas sa bagong window ang content na ito)</span></a> at pumapayag kang makatanggap ng komunikasyon sa email mula sa " + gdprClientName + ".";

  } else if (gdprLanguage === "zh-hans") {

    // Simplified Chinese

    var gdprMessage = "我们利用 Cookie 和其他跟踪技术，以协助导航、改进产品和服务、助力营销工作以及提供第三方的内容。继续使用本网站，即表明您同意我们按照我们的 <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>privacy policy <span id='gdpr-a11y-message' class='visually-hidden'>(该内容将在新窗口中打开)</span></a> 使用 Cookie。如需管理对于第三方 Cookie 的偏好， <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>click here <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(该内容将在新窗口中打开)</span></a>。";

    var gdprConsentBtn = "接受";

    var formMessage = "一旦提交您的信息，即表明您确认已阅读我们的 <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(该内容将在新窗口中打开)</span></a>，并同意接收 " + gdprClientName + " 发送的电子邮件通信。";

  } else if (gdprLanguage === "zh-hant") {

    // Traditional Chinese

    var gdprMessage = "我們會使用 cookies 及其他追蹤技術來輔助導覽、改善我們的產品與服務、輔助我們的行銷作業，以及提供第三方的內容。只要繼續使用此網站，即表示您同意我們可以根據我們的 <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>隱私政策 <span id='gdpr-a11y-message' class='visually-hidden'>（在新視窗開啟此內容）</span></a> 使用 cookies。若要管理第三方的 cookie 偏好設定， <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>請按一下這裡 <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>（在新視窗開啟此內容）</span></a>。";

    var gdprConsentBtn = "接受";

    var formMessage = "只要提交您的資訊，即表示您確認您已閱讀我們的 <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>隱私政策 <span class='visually-hidden'>（在新視窗開啟此內容）</span></a>，且同意收到來自 " + gdprClientName + "的電子郵件通訊。";

  } else {

    // English (Default)

    var gdprMessage = "We use cookies and other tracking technologies to assist with navigation, improve our products and services, assist with our marketing efforts, and provide content from third parties. By continuing to use this site you agree to our use of cookies in accordance with our <a href=" + gdprPolicyURL + " id='gdpr-policy-link' target='_blank' rel='noopener'>privacy policy <span id='gdpr-a11y-message' class='visually-hidden'>(opens in new window)</span></a>. <a href=" + gdprTrusteURL + " id='gdpr-privacy-preference-link' target='_blank' rel='noopener'>Manage third-party cookie preferences here <span id='gdpr-privacy-preference-a11y' class='visually-hidden'>(opens in new window)</span></a>.";

    var gdprConsentBtn = "Accept";

    var formMessage = "By submitting your information, you acknowledge that you have read our <a href=" + gdprPolicyURL + " target='_blank' rel='noopener'>privacy policy <span class='visually-hidden'>(this content opens in new window)</span></a> and consent to receive email communication from " + gdprClientName + ".";

  }

  if (gdprPolicyURL === null || gdprClientName === null) {

    var gdprMessage = "A consent and privacy message cannot be generated until a client name and privacy policy URL have been provided. Please see <a href='https://tmpworldwide.dev/tmp-magic-bullet/gdpr/#banner-mandatory'>mandatory requirements</a> needed for this script to run.";

  }

  // Only load banner if banner has NEVER been displayed before.

  if(consentCapture === null) {

    if(bannerDisplayed === null) {

      // Create Alert

      var gdprContainer = document.createElement("div");

      // Set Alert Attributes

      gdprContainer.setAttribute("id", "gdpr-alert");
      gdprContainer.setAttribute("role", "alert");

      if (gdprBannerTop !== null) {

        gdprContainer.classList.add("gdpr-banner-top");

      }

      if (gdprNoticeColor !== null) {

        gdprContainer.style.setProperty ("background-color", gdprNoticeColor);

      }

      if (gdprNoticeColorText !== null) {

        gdprContainer.style.setProperty ("color", gdprNoticeColorText);

      }

      if (gdprFontSize !== null) {

        gdprContainer.style.setProperty ("font-size", gdprFontSize, "important");

      }

      if (gdprTextAlign !== null) {

        gdprContainer.style.setProperty ("text-align", gdprTextAlign);

      }

      if (gdprzIndex !== null) {

        gdprContainer.style.setProperty ("z-index", gdprzIndex);

      }

      // Now create the element...

      var gdprContentTag = document.createElement("p");
      gdprContentTag.setAttribute("id", "gdpr-content");

      var gdprCustomContentTag = document.createElement("div");
      gdprCustomContentTag.setAttribute("id", "gdpr-content");

      // Add custom message if present...

      if (gdprCustomMessage !== null) {

        gdprCustomContentTag.innerHTML = gdprCustomMessage;
        gdprContainer.appendChild(gdprCustomContentTag);

      } else  {

        gdprContentTag.innerHTML = gdprMessage;
        gdprContainer.appendChild(gdprContentTag);

      }

      // Create Alert Button

      var gdprButton = document.createElement("button");

      // Set Alert Button Attributes

      gdprButton.setAttribute("id", "gdpr-button");

      // Add Alert Button Text

      if (gdprButtonText === null) {

        gdprButtonText = gdprConsentBtn;

      }

      gdprButton.textContent  = gdprButtonText;

      if (gdprButtonColor !== null) {

        gdprButton.style.setProperty ("background-color", gdprButtonColor, "important");

      }

      if (gdprButtonColorText !== null) {

        gdprButton.style.setProperty ("color", gdprButtonColorText, "important");

      }

      // Tracking

      gdprButton.setAttribute("data-custom-event", "true");

      if(gdprGACustomCategory !== null) {

        gdprButton.setAttribute("data-custom-category", gdprGACustomCategory);

      } else {

        gdprButton.setAttribute("data-custom-category", "GDPR");

      }

      if(gdprGACustomLabel !== null) {

        gdprButton.setAttribute("data-custom-label", gdprGACustomLabel);

      } else {

        gdprButton.setAttribute("data-custom-label", "GDPR Accept Button");

      }

      if (gdprPolicyURL !== null && gdprClientName !== null) {

        // Append Alert Button to Alert Policy

        gdprContainer.appendChild(gdprButton);

      }

      // Append Alert to Body Element

      if(gdprBannerRemove === null) {

        if (gdprBannerTop !== null) {

          gdprBody.insertBefore(gdprContainer, gdprBody.childNodes[0] || null);

        } else {

          gdprBody.appendChild(gdprContainer);

        }

      }

      // Remove Target Attribute

      if (gdprNewWindow === "false") {

        var gdprPolicyLink = document.getElementById("gdpr-policy-link");
        var gdprPrivacyRefLink = document.getElementById("gdpr-privacy-preference-link");

        gdprPolicyLink.removeAttribute("target");
        gdprPolicyLink.removeAttribute("rel");
        gdprPrivacyRefLink.removeAttribute("target");
        gdprPrivacyRefLink.removeAttribute("rel");

        var gdprA11yMessage = document.getElementById("gdpr-a11y-message");
        var gdprPrivacyA11y = document.getElementById("gdpr-privacy-preference-a11y");

        gdprPolicyLink.removeChild(gdprA11yMessage);
        gdprPrivacyRefLink.removeChild(gdprPrivacyA11y);

      }

      /******* Consent Types *********/

      // Button Consent

      gdprButton.onclick = function(){

        removeAlert();

        return false;

      };

    }

  }

  // Select Default or Custom Message...

  if (gdprCustomFormMessage !== null) {

    var gdprInlineMessage = gdprCustomFormMessage;

  } else {

    var gdprInlineMessage = formMessage;

  }

  // If form bypass is true...

  if (gdprFormBypass === "true") {

    // Append form message.

    if (gdprFormMessage) {

      // Append to each form on page...

      for (var i = 0; i < gdprFormMessage.length; i++) {

        if (gdprClientName !== null) {

          gdprFormMessage[i].innerHTML = gdprInlineMessage;

        }

      }

    }

  } else {

    // Apply message above all submit buttons...

    for (var x = 0; x < gdprDataFormSubmitBtn.length; x++) {

      var gdprDynamicMessage = document.createElement("p");

      gdprDynamicMessage.className = "form-field gdpr-eu-tmp-notice";

      gdprDynamicMessage.innerHTML = gdprInlineMessage;

      var dataFormSubmitBtn = gdprDataFormSubmitBtn[x];

      var dataFormParent = dataFormSubmitBtn.parentNode;

      dataFormParent.insertBefore(gdprDynamicMessage, dataFormSubmitBtn);

    }

  }

})();
