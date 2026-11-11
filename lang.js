/*!

  Radancy MagicBullet: Language Pack for i18n

  Contributor(s):
  Michael "Spell" Spellacy

  Dependencies: None
  Description: This file provides translations for MagicBullet, a patch used across our career sites to address common accessibility issues.
  Warning: Removing or modifying it could have a significant impact on the accessibility and usability of our global sites, potentially affecting
  users in multiple languages and regions.

*/

// Note: This is an ES module. Each label is declared once here, set by the matching language branch below, and
// exported at the end of the file. Fixes import only the labels they use, e.g.
// import { labelNewWindow } from "../lang.js";

let labelAddJobAlert,
    labelAutoCompleteDesc,
    labelCaptcha,
    labelDialogClose,
    labelLoadingMsg,
    labelNewWindow,
    labelPagination,
    labelPrimaryNavigation,
    labelRemoveFilter,
    labelResultsAvailable,
    labelResultsSorted,
    labelSaveJob,
    labelSearchFilter,
    labelSearchJobs,
    labelSearchKeywordDesc,
    labelSearchKeywordFoundMsg,
    labelSearchKeywordNotFoundMsg,
    labelSelectedJobAlerts,
    labelSubmitJobAlerts,
    labelViewSavedJobs;

const currentPageLanguage = document.documentElement.getAttribute("lang");

if(currentPageLanguage === "ar") {

    // Remove Job Filter

    labelRemoveFilter = "قم بإزالة الفلتر";

    // Job Alert

    labelAddJobAlert = "إضافة تنبيه وظيفة";
    labelSelectedJobAlerts = "تنبيهات الوظائف المختارة";
    labelCaptcha = "كابتشا";
    labelSubmitJobAlerts = "إرسال تنبيهات الوظائف";

    // Global Header

    labelPrimaryNavigation = "رئيسي";
    labelViewSavedJobs = "عرض الوظائف المحفوظة";

    // Save Job Button

    labelSaveJob = "حفظ الوظيفة";

    // Search Form

    labelSearchJobs = "ابحث عن وظائف";

    // Search Filter

    labelSearchFilter = "فلتر البحث";

    // Pagination

    labelPagination = "ترقيم الصفحات";

    // Search Results

    labelLoadingMsg = "جارٍ تحميل نتائج جديدة.";
    labelResultsAvailable = "{count} من أصل {total} نتائج متاحة الآن.";
    labelResultsSorted = "النتائج مرتبة حسب {label}";

    // New Window

    labelNewWindow = "يفتح في نافذة جديدة";

    // Search Keyword

    labelSearchKeywordDesc = "ستظهر روابط الوظائف المطابقة أدناه أثناء الكتابة.";
    labelSearchKeywordFoundMsg = "تم العثور على {count} من روابط الوظائف المطابقة.";
    labelSearchKeywordNotFoundMsg = "لم يتم العثور على روابط وظائف مطابقة.";

    // Autocomplete

    labelAutoCompleteDesc = "عند توفر نتائج الإكمال التلقائي، استخدم أسهم الأعلى والأسفل للمراجعة، ثم اضغط على زر الإدخال للاختيار. لمستخدمي الأجهزة التي تعمل باللمس، استكشفوا عبر اللمس أو باستخدام إيماءات التمرير.";

    // Dialog Close Button

    labelDialogClose = "يغلق";

} else if (currentPageLanguage === "bg") {

    // Remove Job Filter

    labelRemoveFilter = "Премахване на филтъра";

    // Job Alert

    labelAddJobAlert = "Добавяне на известие за работа";
    labelSelectedJobAlerts = "Избрани сигнали за работа";
    labelCaptcha = "Капча";
    labelSubmitJobAlerts = "Изпращане на известия за работа";

    // Global Header

    labelPrimaryNavigation = "Главно";
    labelViewSavedJobs = "Преглед на запазените работни места";

    // Save Job Button

    labelSaveJob = "Запазване на задачата";

    // Search Form

    labelSearchJobs = "Търсене на работа";

    // Search Filter

    labelSearchFilter = "Филтър за търсене";

    // Pagination

    labelPagination = "Пагинация";

    // Search Results

    labelLoadingMsg = "Зареждане на нови резултати.";
    labelResultsAvailable = "Вече са налични {count} от {total} резултата.";
    labelResultsSorted = "Резултати, сортирани по {label}";

    // New Window

    labelNewWindow = "отваря се в нов прозорец";

    // Search Keyword

    labelSearchKeywordDesc = "Съответстващи връзки за работа ще се показват по-долу, докато пишете.";
    labelSearchKeywordFoundMsg = "Намерени са {count} съответстващи връзки за работа.";
    labelSearchKeywordNotFoundMsg = "Няма намерени съответстващи връзки за работа.";

    // Autocomplete

    labelAutoCompleteDesc = "Когато са налични резултати от автоматично довършване, използвайте стрелките нагоре и надолу за преглед и Enter за избор. Потребителите на устройства с докосване могат да изследват чрез докосване или с плъзгане.";

    // Dialog Close Button

    labelDialogClose = "Затвори";

} else if (currentPageLanguage === "zh-Hans") {

    // Remove Job Filter

    labelRemoveFilter = "移除过滤器";

    // Job Alert

    labelAddJobAlert = "添加职位提醒";
    labelSelectedJobAlerts = "精选职位提醒";
    labelCaptcha = "验证码";
    labelSubmitJobAlerts = "提交职位提醒";

    // Global Header

    labelPrimaryNavigation = "主要的";
    labelViewSavedJobs = "查看已保存的职位";

    // Save Job Button

    labelSaveJob = "保住工作";

    // Search Form

    labelSearchJobs = "搜索职位";

    // Search Filter

    labelSearchFilter = "搜索筛选器";

    // Pagination

    labelPagination = "分页";

    // Search Results

    labelLoadingMsg = "正在加载新结果。";
    labelResultsAvailable = "现在共有 {count} 条结果，总计 {total} 条结果。";
    labelResultsSorted = "按 {label} 排序的结果";

    // New Window

    labelNewWindow = "在新窗口中打开";

    // Search Keyword

    labelSearchKeywordDesc = "输入内容时，下方将显示匹配的职位链接。";
    labelSearchKeywordFoundMsg = "找到 {count} 个匹配的职位链接。";
    labelSearchKeywordNotFoundMsg = "未找到匹配的职位链接。";

    // Autocomplete

    labelAutoCompleteDesc = "当有自动完成结果时，请使用上下箭头键查看，然后按回车键选择。触控设备用户，请使用触控或滑动操作进行浏览。";

    // Dialog Close Button

    labelDialogClose = "关闭";

} else if (currentPageLanguage === "zh-Hant") {

    // Remove Job Filter

    labelRemoveFilter = "移除過濾器";

    // Job Alert

    labelAddJobAlert = "新增職位提醒";
    labelSelectedJobAlerts = "精選職位提醒";
    labelCaptcha = "驗證碼";
    labelSubmitJobAlerts = "提交職位提醒";

    // Global Header

    labelPrimaryNavigation = "主要的";
    labelViewSavedJobs = "查看已保存的職位";

    // Save Job Button

    labelSaveJob = "保住工作";

    // Search Form

    labelSearchJobs = "搜尋職位";

    // Search Filter

    labelSearchFilter = "搜尋篩選器";

    // Pagination

    labelPagination = "分頁";

    // Search Results

    labelLoadingMsg = "正在載入新結果。";
    labelResultsAvailable = "現在共有 {count} 項結果，總計 {total} 條結果。";
    labelResultsSorted = "按 {label} 排序的結果";

    // New Window

    labelNewWindow = "在新視窗中開啟";

    // Search Keyword

    labelSearchKeywordDesc = "輸入內容時，下方將顯示相符的職位連結。";
    labelSearchKeywordFoundMsg = "找到 {count} 個符合的職位連結。";
    labelSearchKeywordNotFoundMsg = "未找到符合的職位連結。";

    // Autocomplete

    labelAutoCompleteDesc = "當有自動完成結果時，請使用上下箭頭鍵查看，然後按回車鍵選擇。觸控設備用戶，請使用觸控或滑動操作進行瀏覽。";

    // Dialog Close Button

    labelDialogClose = "關閉";

} else if (currentPageLanguage === "hr") {

    // Remove Job Filter

    labelRemoveFilter = "Ukloni filtar";

    // Job Alert

    labelAddJobAlert = "Dodaj upozorenje o poslu";
    labelSelectedJobAlerts = "Odabrana upozorenja o poslovima";
    labelCaptcha = "Kapča";
    labelSubmitJobAlerts = "Pošalji upozorenja o poslovima";

    // Global Header

    labelPrimaryNavigation = "Glavni";
    labelViewSavedJobs = "Prikaži spremljene poslove";

    // Save Job Button

    labelSaveJob = "Spremi posao";

    // Search Form

    labelSearchJobs = "Pretraživanje poslova";

    // Search Filter

    labelSearchFilter = "Filter za pretraživanje";

    // Pagination

    labelPagination = "Paginacija";

    // Search Results

    labelLoadingMsg = "Učitavanje novih rezultata.";
    labelResultsAvailable = "Sada je dostupno {count} od {total} rezultata.";
    labelResultsSorted = "Rezultati sortirani po {label}";

    // New Window

    labelNewWindow = "otvara se u novom prozoru";

    // Search Keyword

    labelSearchKeywordDesc = "Odgovarajuće poveznice za poslove prikazivat će se ispod dok tipkate.";
    labelSearchKeywordFoundMsg = "Pronađene su odgovarajuće poveznice za poslove ({count}).";
    labelSearchKeywordNotFoundMsg = "Nisu pronađene odgovarajuće poveznice za posao.";

    // Autocomplete

    labelAutoCompleteDesc = "Kada su dostupni rezultati automatskog dovršavanja, koristite strelice gore i dolje za pregled i Enter za odabir. Korisnici dodirnih uređaja istražuju dodirom ili pokretima prsta.";

    // Dialog Close Button

    labelDialogClose = "Zatvoriti";

} else if (currentPageLanguage === "cs") {

    // Remove Job Filter

    labelRemoveFilter = "Odebrat filtr";

    // Job Alert

    labelAddJobAlert = "Přidat upozornění na pracovní nabídku";
    labelSelectedJobAlerts = "Vybraná upozornění na pracovní nabídky";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Odeslat upozornění na pracovní nabídky";

    // Global Header

    labelPrimaryNavigation = "Hlavní";
    labelViewSavedJobs = "Zobrazit uložené úlohy";

    // Save Job Button

    labelSaveJob = "Uložit úlohu";

    // Search Form

    labelSearchJobs = "Hledat pracovní nabídky";

    // Search Filter

    labelSearchFilter = "Vyhledávací filtr";

    // Pagination

    labelPagination = "Stránkování";

    // Search Results

    labelLoadingMsg = "Načítání nových výsledků.";
    labelResultsAvailable = "Nyní je k dispozici {count} z {total} výsledků.";
    labelResultsSorted = "Výsledky seřazené podle {label}";

    // New Window

    labelNewWindow = "otevře se v novém okně";

    // Search Keyword

    labelSearchKeywordDesc = "Odpovídající odkazy na pracovní nabídky se budou zobrazovat níže během psaní.";
    labelSearchKeywordFoundMsg = "Nalezeno {count} odpovídajících odkazů na pracovní nabídky.";
    labelSearchKeywordNotFoundMsg = "Nenalezeny žádné odpovídající odkazy na pracovní nabídky.";

    // Autocomplete

    labelAutoCompleteDesc = "Pokud jsou k dispozici výsledky automatického doplňování, použijte šipky nahoru a dolů k prohlédnutí a klávesu Enter k výběru. Uživatelé dotykových zařízení mohou prozkoumávat výsledky dotykem nebo přejetím prstem.";

    // Dialog Close Button

    labelDialogClose = "Blízko";

} else if (currentPageLanguage === "da") {

    // Remove Job Filter

    labelRemoveFilter = "Fjern filter";

    // Job Alert

    labelAddJobAlert = "Tilføj jobalarm";
    labelSelectedJobAlerts = "Udvalgte jobalarmer";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Indsend jobalarmer";

    // Global Header

    labelPrimaryNavigation = "Hoved";
    labelViewSavedJobs = "Se gemte job";

    // Save Job Button

    labelSaveJob = "Gem job";

    // Search Form

    labelSearchJobs = "Søg job";

    // Search Filter

    labelSearchFilter = "Søgefilter";

    // Pagination

    labelPagination = "Paginering";

    // Search Results

    labelLoadingMsg = "Indlæser nye resultater.";
    labelResultsAvailable = "{count} af {total} resultater er nu tilgængelige.";
    labelResultsSorted = "Resultater sorteret efter {label}";

    // New Window

    labelNewWindow = "åbner i et nyt vindue";

    // Search Keyword

    labelSearchKeywordDesc = "Matchende joblinks vises nedenfor, mens du skriver.";
    labelSearchKeywordFoundMsg = "{count} matchende joblinks fundet.";
    labelSearchKeywordNotFoundMsg = "Ingen matchende joblinks fundet.";

    // Autocomplete

    labelAutoCompleteDesc = "Når autofuldførelsesresultater er tilgængelige, skal du bruge pil op og pil ned til at gennemgå og Enter for at vælge. Brugere af berøringsenheder kan udforske ved at trykke eller med swipe-bevægelser.";

    // Dialog Close Button

    labelDialogClose = "Tæt";

} else if (currentPageLanguage === "nl") {

    // Remove Job Filter

    labelRemoveFilter = "Filter verwijderen";

    // Job Alert

    labelAddJobAlert = "Vacaturemelding toevoegen";
    labelSelectedJobAlerts = "Geselecteerde vacaturemeldingen";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Vacaturemeldingen indienen";

    // Global Header

    labelPrimaryNavigation = "Voornaamst";
    labelViewSavedJobs = "Bekijk opgeslagen vacatures";

    // Save Job Button

    labelSaveJob = "Baan behouden";

    // Search Form

    labelSearchJobs = "Vacatures zoeken";

    // Search Filter

    labelSearchFilter = "Zoekfilter";

    // Pagination

    labelPagination = "Paginering";

    // Search Results

    labelLoadingMsg = "Nieuwe resultaten worden geladen.";
    labelResultsAvailable = "{count} van {total} resultaten zijn nu beschikbaar.";
    labelResultsSorted = "Resultaten gesorteerd op {label}";

    // New Window

    labelNewWindow = "wordt in een nieuw venster geopend";

    // Search Keyword

    labelSearchKeywordDesc = "Relevante vacaturelinks verschijnen hieronder terwijl u typt.";
    labelSearchKeywordFoundMsg = "{count} overeenkomende vacaturelinks gevonden.";
    labelSearchKeywordNotFoundMsg = "Geen overeenkomende vacatures gevonden.";

    // Autocomplete

    labelAutoCompleteDesc = "Gebruik de pijltoetsen omhoog en omlaag om de resultaten te bekijken en druk op Enter om een ​​keuze te maken wanneer er automatisch aanvullende resultaten beschikbaar zijn. Gebruikers van touchscreens kunnen de resultaten verkennen door te tikken of te vegen.";

    // Dialog Close Button

    labelDialogClose = "Dichtbij";

} else if (currentPageLanguage === "en-GB") {

    // Remove Job Filter

    labelRemoveFilter = "Remove Filter";

    // Job Alert

    labelAddJobAlert = "Add Job Alert";
    labelSelectedJobAlerts = "Selected Job Alerts";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Submit Job Alerts";

    // Global Header

    labelPrimaryNavigation = "Main";
    labelViewSavedJobs = "View Saved Jobs";

    // Save Job Button

    labelSaveJob = "Save Job";

    // Search Form

    labelSearchJobs = "Search Jobs";

    // Search Filter

    labelSearchFilter = "Search Filter";

    // Pagination

    labelPagination = "Pagination";

    // Search Results

    labelLoadingMsg = "Loading new results.";
    labelResultsAvailable = "{count} of {total} results are now available.";
    labelResultsSorted = "Results sorted by {label}.";

    // New Window

    labelNewWindow = "opens in new window";

    // Search Keyword

    labelSearchKeywordDesc = "Matching job links will appear below as you type.";
    labelSearchKeywordFoundMsg = "{count} matching job links found.";
    labelSearchKeywordNotFoundMsg = "No matching job links found.";

    // Autocomplete

    labelAutoCompleteDesc = "When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.";

    // Dialog Close Button

    labelDialogClose = "Close";

} else if (currentPageLanguage === "et") {

    // Remove Job Filter

    labelRemoveFilter = "Eemalda filter";

    // Job Alert

    labelAddJobAlert = "Lisa tööhoiatus";
    labelSelectedJobAlerts = "Valitud tööpakkumiste teavitused";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Esita tööpakkumiste teavitusi";

    // Global Header

    labelPrimaryNavigation = "Peamine";
    labelViewSavedJobs = "Kuva salvestatud töökohad";

    // Save Job Button

    labelSaveJob = "Salvesta töökoht";

    // Search Form

    labelSearchJobs = "Otsi töökohti";

    // Search Filter

    labelSearchFilter = "Otsingufilter";

    // Pagination

    labelPagination = "Lehekülgede arv";

    // Search Results

    labelLoadingMsg = "Uute tulemuste laadimine.";
    labelResultsAvailable = "{count} tulemust {total} tulemusest on nüüd saadaval.";
    labelResultsSorted = "Tulemused sorteeritud sildi {label} järgi";

    // New Window

    labelNewWindow = "avaneb uues aknas";

    // Search Keyword

    labelSearchKeywordDesc = "Sobivate töökohtade lingid kuvatakse allpool sisestamise ajal.";
    labelSearchKeywordFoundMsg = "Leiti {count} sobivat töökuulutuse linki.";
    labelSearchKeywordNotFoundMsg = "Sobivaid tööpakkumiste linke ei leitud.";

    // Autocomplete

    labelAutoCompleteDesc = "Kui automaatse täitmise tulemused on saadaval, kasutage ülevaatamiseks üles- ja allanooli ning valimiseks sisestusklahvi. Puudutage seadme kasutajaid, uurige puudutuse või pühkimisliigutuste abil.";

    // Dialog Close Button

    labelDialogClose = "Sule";

} else if (currentPageLanguage === "fi") {

    // Remove Job Filter

    labelRemoveFilter = "Poista suodatin";

    // Job Alert

    labelAddJobAlert = "Lisää työpaikkailmoitus";
    labelSelectedJobAlerts = "Valitut työpaikkailmoitukset";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Lähetä työpaikkahälytyksiä";

    // Global Header

    labelPrimaryNavigation = "Pääasiallinen";
    labelViewSavedJobs = "Näytä tallennetut työpaikat";

    // Save Job Button

    labelSaveJob = "Tallenna työ";

    // Search Form

    labelSearchJobs = "Hae työpaikkoja";

    // Search Filter

    labelSearchFilter = "Hakusuodatin";

    // Pagination

    labelPagination = "Sivunumerointi";

    // Search Results

    labelLoadingMsg = "Ladataan uusia tuloksia.";
    labelResultsAvailable = "{count} / {total} tulosta on nyt saatavilla.";
    labelResultsSorted = "Tulokset lajiteltu {label} -perusteella";

    // New Window

    labelNewWindow = "avautuu uuteen ikkunaan";

    // Search Keyword

    labelSearchKeywordDesc = "Vastaavat työpaikkalinkit näkyvät alla kirjoittaessasi.";
    labelSearchKeywordFoundMsg = "Löytyi {count} vastaavaa työpaikkalinkkiä.";
    labelSearchKeywordNotFoundMsg = "Ei vastaavia työpaikkalinkkejä.";

    // Autocomplete

    labelAutoCompleteDesc = "Kun automaattisen täydennyksen tulokset ovat saatavilla, tarkista ne ylä- ja alanuolilla ja valitse Enter-näppäimellä. Kosketa laitteen käyttäjiä, tutki koskettamalla tai pyyhkäisemällä.";

    // Dialog Close Button

    labelDialogClose = "Lähellä";

} else if (currentPageLanguage === "fr") {

    // Remove Job Filter

    labelRemoveFilter = "Supprimer le filtre";

    // Job Alert

    labelAddJobAlert = "Ajouter une alerte emploi";
    labelSelectedJobAlerts = "Alertes emploi sélectionnées";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Envoyer des alertes emploi";

    // Global Header

    labelPrimaryNavigation = "Menu principal";
    labelViewSavedJobs = "Voir les offres d'emploi enregistrées";

    // Save Job Button

    labelSaveJob = "Enregistrer pour plus tard";

    // Search Form

    labelSearchJobs = "Recherche d'emplois";

    // Search Filter

    labelSearchFilter = "Filtre de recherche";

    // Pagination

    labelPagination = "Pagination";

    // Search Results

    labelLoadingMsg = "Chargement des nouveaux résultats.";
    labelResultsAvailable = "{count} des {total} résultats sont maintenant disponibles.";
    labelResultsSorted = "Résultats triés par {label}";

    // New Window

    labelNewWindow = "ouvre dans une nouvelle fenêtre";

    // Search Keyword

    labelSearchKeywordDesc = "Les liens vers les offres d'emploi correspondantes apparaîtront ci-dessous au fur et à mesure que vous taperez.";
    labelSearchKeywordFoundMsg = "{count} liens d'emploi correspondants trouvés.";
    labelSearchKeywordNotFoundMsg = "Aucun lien vers une offre d'emploi correspondante n'a été trouvé.";

    // Autocomplete

    labelAutoCompleteDesc = "Lorsque des suggestions de saisie semi-automatique sont disponibles, utilisez les flèches haut et bas pour les parcourir et appuyez sur Entrée pour sélectionner. Sur les appareils tactiles, explorez les options par le toucher ou par glissement.";

    // Dialog Close Button

    labelDialogClose = "Fermer";

} else if (currentPageLanguage === "de") {

    // Remove Job Filter

    labelRemoveFilter = "Filter entfernen";

    // Job Alert

    labelAddJobAlert = "Jobbenachrichtigung hinzufügen";
    labelSelectedJobAlerts = "Ausgewählte Jobbenachrichtigungen";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Jobbenachrichtigungen einreichen";

    // Global Header

    labelPrimaryNavigation = "Hauptsächlich";
    labelViewSavedJobs = "Gespeicherte Jobs ansehen";

    // Save Job Button

    labelSaveJob = "Job retten";

    // Search Form

    labelSearchJobs = "Stellenangebote suchen";

    // Search Filter

    labelSearchFilter = "Suchfilter";

    // Pagination

    labelPagination = "Pagination";

    // Search Results

    labelLoadingMsg = "Neue Ergebnisse werden geladen.";
    labelResultsAvailable = "Es sind nun {count} von {total} Ergebnissen verfügbar.";
    labelResultsSorted = "Ergebnisse sortiert nach {label}";

    // New Window

    labelNewWindow = "wird in einem neuen Fenster geöffnet";

    // Search Keyword

    labelSearchKeywordDesc = "Passende Stellenlinks werden während Ihrer Eingabe unten angezeigt.";
    labelSearchKeywordFoundMsg = "{count} passende Stellenangebote gefunden.";
    labelSearchKeywordNotFoundMsg = "Es wurden keine passenden Stellenangebote gefunden.";

    // Autocomplete

    labelAutoCompleteDesc = "Wenn Autovervollständigungsvorschläge verfügbar sind, können Sie diese mit den Pfeiltasten nach oben und unten durchsuchen und mit der Eingabetaste auswählen. Nutzer von Touchscreen-Geräten können die Vorschläge per Berührung oder Wischgesten erkunden.";

    // Dialog Close Button

    labelDialogClose = "Schließen";

} else if (currentPageLanguage === "he") {

    // Remove Job Filter

    labelRemoveFilter = "הסר מסנן";

    // Job Alert

    labelAddJobAlert = "הוסף התראת דרושים";
    labelSelectedJobAlerts = "התראות דרושים נבחרות";
    labelCaptcha = "קפטצ'ה";
    labelSubmitJobAlerts = "שלח התראות דרושים";

    // Global Header

    labelPrimaryNavigation = "רָאשִׁי";
    labelViewSavedJobs = "הצג עבודות שנשמרו";

    // Save Job Button

    labelSaveJob = "שמור עבודה";

    // Search Form

    labelSearchJobs = "חיפוש משרות";

    // Search Filter

    labelSearchFilter = "מסנן חיפוש";

    // Pagination

    labelPagination = "דִפּוּף";

    // Search Results

    labelLoadingMsg = "טוען תוצאות חדשות.";
    labelResultsAvailable = "{count} מתוך {total} תוצאות זמינות כעת.";
    labelResultsSorted = "תוצאות ממוינות לפי {label}";

    // New Window

    labelNewWindow = "נפתח בחלון חדש";

    // Search Keyword

    labelSearchKeywordDesc = "קישורים למשרות תואמות יופיעו למטה בזמן ההקלדה.";
    labelSearchKeywordFoundMsg = "נמצאו קישורי עבודה תואמים ({count}).";
    labelSearchKeywordNotFoundMsg = "לא נמצאו קישורי עבודה תואמים.";

    // Autocomplete

    labelAutoCompleteDesc = "כאשר תוצאות השלמה אוטומטית זמינות, השתמש בחצים למעלה ולמטה כדי לסקור ו-Enter כדי לבחור. משתמשי מכשירים יכולים לגלות באמצעות מגע או תנועות החלקה.";

    // Dialog Close Button

    labelDialogClose = "לִסְגוֹר";

} else if (currentPageLanguage === "hu") {

    // Remove Job Filter

    labelRemoveFilter = "Szűrő eltávolítása";

    // Job Alert

    labelAddJobAlert = "Állásértesítés hozzáadása";
    labelSelectedJobAlerts = "Kiválasztott állásértesítések";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Állásértesítések beküldése";

    // Global Header

    labelPrimaryNavigation = "Fő";
    labelViewSavedJobs = "Mentett állások megtekintése";

    // Save Job Button

    labelSaveJob = "Állás mentése";

    // Search Form

    labelSearchJobs = "Álláskeresés";

    // Search Filter

    labelSearchFilter = "Keresési szűrő";

    // Pagination

    labelPagination = "Lapszámozás";

    // Search Results

    labelLoadingMsg = "Új találatok betöltése.";
    labelResultsAvailable = "{count} / {total} találat most elérhető.";
    labelResultsSorted = "Eredmények rendezve {label} szerint";

    // New Window

    labelNewWindow = "új ablakban nyílik meg";

    // Search Keyword

    labelSearchKeywordDesc = "A keresésnek megfelelő álláshirdetések linkjei gépelés közben jelennek meg alább.";
    labelSearchKeywordFoundMsg = "{count} egyező álláshirdetési link található.";
    labelSearchKeywordNotFoundMsg = "Nincsenek megfelelő álláshirdetési linkek.";

    // Autocomplete

    labelAutoCompleteDesc = "Amikor az automatikus kiegészítés eredményei elérhetők, a fel és le nyilakat használd az áttekintéshez, és az Enter billentyűt a kiválasztáshoz. Érintős eszközhasználók számára a böngészés érintéssel vagy húzással történik.";

    // Dialog Close Button

    labelDialogClose = "Közeli";

} else if (currentPageLanguage === "is") {

    // Remove Job Filter

    labelRemoveFilter = "Fjarlægja síu";

    // Job Alert

    labelAddJobAlert = "Bæta við atvinnuviðvörun";
    labelSelectedJobAlerts = "Valdar atvinnuviðvaranir";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Senda inn atvinnuviðvaranir";

    // Global Header

    labelPrimaryNavigation = "Aðal";
    labelViewSavedJobs = "Skoða vistaðar störf";

    // Save Job Button

    labelSaveJob = "Vista verk";

    // Search Form

    labelSearchJobs = "Leita að störfum";

    // Search Filter

    labelSearchFilter = "Leitarsía";

    // Pagination

    labelPagination = "Síðunúmeraskipti";

    // Search Results

    labelLoadingMsg = "Hleður inn nýjum niðurstöðum.";
    labelResultsAvailable = "{count} af {total} niðurstöðum eru nú tiltækar.";
    labelResultsSorted = "Niðurstöður raðaðar eftir {label}";

    // New Window

    labelNewWindow = "opnast í nýjum glugga";

    // Search Keyword

    labelSearchKeywordDesc = "Tenglar sem passa við störf birtast hér að neðan þegar þú skrifar.";
    labelSearchKeywordFoundMsg = "{count} samsvarandi atvinnutenglar fundust.";
    labelSearchKeywordNotFoundMsg = "Engir samsvarandi starfstenglar fundust.";

    // Autocomplete

    labelAutoCompleteDesc = "Þegar sjálfvirkar niðurstöður eru tiltækar skaltu nota örvarnar upp og niður til að skoða og færa inn til að velja. Notendur sem nota snertingu geta skoðað tækið með snertingu eða strjúkbendingum.";

    // Dialog Close Button

    labelDialogClose = "Loka";

} else if (currentPageLanguage === "it") {

    // Remove Job Filter

    labelRemoveFilter = "Rimuovere il filtro";

    // Job Alert

    labelAddJobAlert = "Aggiungi avviso di lavoro";
    labelSelectedJobAlerts = "Avvisi di lavoro selezionati";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Invia avvisi di lavoro";

    // Global Header

    labelPrimaryNavigation = "Principale";
    labelViewSavedJobs = "Visualizza i lavori salvati";

    // Save Job Button

    labelSaveJob = "Salva lavoro";

    // Search Form

    labelSearchJobs = "Cerca lavoro";

    // Search Filter

    labelSearchFilter = "Filtro di ricerca";

    // Pagination

    labelPagination = "Paginazione";

    // Search Results

    labelLoadingMsg = "Caricamento dei nuovi risultati.";
    labelResultsAvailable = "{count} di {total} risultati sono ora disponibili.";
    labelResultsSorted = "Risultati ordinati per {label}";

    // New Window

    labelNewWindow = "si apre in una nuova finestra";

    // Search Keyword

    labelSearchKeywordDesc = "I link alle offerte di lavoro corrispondenti appariranno qui sotto man mano che digiti.";
    labelSearchKeywordFoundMsg = "{count} link di lavoro corrispondenti trovati.";
    labelSearchKeywordNotFoundMsg = "Nessun link di lavoro corrispondente trovato.";

    // Autocomplete

    labelAutoCompleteDesc = "Quando sono disponibili i risultati del completamento automatico, utilizzare le frecce su e giù per visualizzarli e il tasto Invio per selezionarli. Gli utenti di dispositivi touch possono esplorare i risultati tramite tocco o gesti di scorrimento.";

    // Dialog Close Button

    labelDialogClose = "Vicino";

} else if (currentPageLanguage === "ja") {

    // Remove Job Filter

    labelRemoveFilter = "フィルターを削除";

    // Job Alert

    labelAddJobAlert = "求人アラートを追加";
    labelSelectedJobAlerts = "厳選された求人情報";
    labelCaptcha = "キャプチャ";
    labelSubmitJobAlerts = "求人アラートを送信する";

    // Global Header

    labelPrimaryNavigation = "主要";
    labelViewSavedJobs = "保存した求人を見る";

    // Save Job Button

    labelSaveJob = "ジョブを保存";

    // Search Form

    labelSearchJobs = "求人検索";

    // Search Filter

    labelSearchFilter = "検索フィルター";

    // Pagination

    labelPagination = "ページネーション";

    // Search Results

    labelLoadingMsg = "新しい結果を読み込んでいます。";
    labelResultsAvailable = "{total}件中{count}件の結果が表示されました。";
    labelResultsSorted = "結果は{label}でソートされています。";

    // New Window

    labelNewWindow = "新しいウィンドウで開きます";

    // Search Keyword

    labelSearchKeywordDesc = "入力内容に応じて、関連する求人リンクが下に表示されます。";
    labelSearchKeywordFoundMsg = "{count}件の一致する求人リンクが見つかりました。";
    labelSearchKeywordNotFoundMsg = "一致する求人リンクは見つかりませんでした。";

    // Autocomplete

    labelAutoCompleteDesc = "オートコンプリートの結果が表示されたら、上下矢印キーで確認し、Enterキーで選択します。タッチデバイスをご利用の場合は、タッチ操作またはスワイプ操作で探索してください。";

    // Dialog Close Button

    labelDialogClose = "近い";

} else if (currentPageLanguage === "ko") {

    // Remove Job Filter

    labelRemoveFilter = "필터 제거";

    // Job Alert

    labelAddJobAlert = "채용 알림 추가";
    labelSelectedJobAlerts = "선택된 채용 공고 알림";
    labelCaptcha = "캡차";
    labelSubmitJobAlerts = "채용 공고 알림 신청하기";

    // Global Header

    labelPrimaryNavigation = "기본";
    labelViewSavedJobs = "저장된 채용 정보 보기";

    // Save Job Button

    labelSaveJob = "일자리 저장";

    // Search Form

    labelSearchJobs = "채용 정보 검색";

    // Search Filter

    labelSearchFilter = "검색 필터";

    // Pagination

    labelPagination = "쪽수 매기기";

    // Search Results

    labelLoadingMsg = "새로운 검색 결과를 불러오는 중입니다.";
    labelResultsAvailable = "{total}개의 결과 중 {count}개의 결과가 나왔습니다.";
    labelResultsSorted = "{label} 기준으로 정렬된 결과";

    // New Window

    labelNewWindow = "새 창에서 열립니다";

    // Search Keyword

    labelSearchKeywordDesc = "입력하시는 동안 아래에 관련 채용 정보 링크가 표시됩니다.";
    labelSearchKeywordFoundMsg = "{count}개의 일치하는 채용 링크가 발견되었습니다.";
    labelSearchKeywordNotFoundMsg = "일치하는 채용 정보 링크를 찾을 수 없습니다.";

    // Autocomplete

    labelAutoCompleteDesc = "자동 완성 결과가 표시되면 위아래 화살표를 사용하여 내용을 검토하고 Enter 키를 눌러 선택하세요. 터치 기기 사용자는 터치 또는 스와이프 제스처를 사용하여 탐색할 수 있습니다.";

    // Dialog Close Button

    labelDialogClose = "닫다";

} else if (currentPageLanguage === "lv") {

    // Remove Job Filter

    labelRemoveFilter = "Noņemt filtru";

    // Job Alert

    labelAddJobAlert = "Pievienot darba brīdinājumu";
    labelSelectedJobAlerts = "Atlasītie darba brīdinājumi";
    labelCaptcha = "CAPTCHA";
    labelSubmitJobAlerts = "Iesniegt darba brīdinājumus";

    // Global Header

    labelPrimaryNavigation = "Galvenais";
    labelViewSavedJobs = "Skatīt saglabātos darbus";

    // Save Job Button

    labelSaveJob = "Saglabāt darbu";

    // Search Form

    labelSearchJobs = "Meklēt darba sludinājumus";

    // Search Filter

    labelSearchFilter = "Meklēšanas filtrs";

    // Pagination

    labelPagination = "Lappušu numerācija";

    // Search Results

    labelLoadingMsg = "Notiek jaunu rezultātu ielāde.";
    labelResultsAvailable = "Tagad ir pieejami {count} no {total} rezultātiem.";
    labelResultsSorted = "Rezultāti sakārtoti pēc {label}";

    // New Window

    labelNewWindow = "atveras jaunā logā";

    // Search Keyword

    labelSearchKeywordDesc = "Atbilstošas ​​darba sludinājumu saites parādīsies zemāk, kamēr rakstāt.";
    labelSearchKeywordFoundMsg = "Atrastas {count} atbilstošas ​​darba sludinājumu saites.";
    labelSearchKeywordNotFoundMsg = "Nav atrastas atbilstošas ​​darba saites.";

    // Autocomplete

    labelAutoCompleteDesc = "Kad ir pieejami automātiskās pabeigšanas rezultāti, izmantojiet augšupvērsto un lejupvērsto bultiņu, lai tos pārskatītu, un taustiņu Enter, lai atlasītu. Pieskarieties ierīču lietotājiem, pārlūkojiet tos ar pieskārienu vai ar vilkšanas žestiem.";

    // Dialog Close Button

    labelDialogClose = "Aizvērt";

} else if (currentPageLanguage === "lt") {

    // Remove Job Filter

    labelRemoveFilter = "Pašalinti filtrą";

    // Job Alert

    labelAddJobAlert = "Pridėti darbo įspėjimą";
    labelSelectedJobAlerts = "Pasirinktų darbo skelbimų įspėjimai";
    labelCaptcha = '„Captcha"';
    labelSubmitJobAlerts = "Pateikti darbo skelbimų įspėjimus";

    // Global Header

    labelPrimaryNavigation = "Pagrindinis";
    labelViewSavedJobs = "Peržiūrėti išsaugotus darbus";

    // Save Job Button

    labelSaveJob = "Išsaugoti darbą";

    // Search Form

    labelSearchJobs = "Ieškoti darbo";

    // Search Filter

    labelSearchFilter = "Paieškos filtras";

    // Pagination

    labelPagination = "Puslapavimas";

    // Search Results

    labelLoadingMsg = "Įkeliami nauji rezultatai.";
    labelResultsAvailable = "{count} iš {total} rezultatų jau pasiekiami.";
    labelResultsSorted = "Rezultatai surūšiuoti pagal {label}";

    // New Window

    labelNewWindow = "atsidaro naujame lange";

    // Search Keyword

    labelSearchKeywordDesc = "Atitinkančios darbo nuorodos bus rodomos žemiau, kai rašysite.";
    labelSearchKeywordFoundMsg = "Rasta atitinkančių darbo pasiūlymų nuorodų: {count}";
    labelSearchKeywordNotFoundMsg = "Nerasta atitinkančių darbo nuorodų.";

    // Autocomplete

    labelAutoCompleteDesc = "Kai pasiekiami automatinio užbaigimo rezultatai, naudokite rodykles aukštyn ir žemyn, kad peržiūrėtumėte, ir „Enter“, kad pasirinktumėte. Palieskite įrenginių naudotojus, naršykite liesdami arba braukimo gestais.";

    // Dialog Close Button

    labelDialogClose = "Uždaryti";

} else if (currentPageLanguage === "ms") {

    // Remove Job Filter

    labelRemoveFilter = "Alih Keluar Penapis";

    // Job Alert

    labelAddJobAlert = "Tambah Amaran Pekerjaan";
    labelSelectedJobAlerts = "Amaran Pekerjaan Terpilih";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Hantar Makluman Pekerjaan";

    // Global Header

    labelPrimaryNavigation = "Utama";
    labelViewSavedJobs = "Lihat Pekerjaan yang Disimpan";

    // Save Job Button

    labelSaveJob = "Simpan Kerja";

    // Search Form

    labelSearchJobs = "Cari Pekerjaan";

    // Search Filter

    labelSearchFilter = "Penapis Carian";

    // Pagination

    labelPagination = "Penomboran halaman";

    // Search Results

    labelLoadingMsg = "Memuatkan hasil baharu.";
    labelResultsAvailable = "{count} daripada {total} keputusan kini tersedia.";
    labelResultsSorted = "Keputusan disusun mengikut {label}";

    // New Window

    labelNewWindow = "dibuka dalam tetingkap baharu";

    // Search Keyword

    labelSearchKeywordDesc = "Pautan kerja yang sepadan akan dipaparkan di bawah semasa anda menaip.";
    labelSearchKeywordFoundMsg = "{count} pautan kerja yang sepadan ditemui.";
    labelSearchKeywordNotFoundMsg = "Tiada pautan kerja yang sepadan ditemui.";

    // Autocomplete

    labelAutoCompleteDesc = "Apabila hasil autolengkap tersedia, gunakan anak panah atas dan bawah untuk menyemak dan masuk untuk memilih. Sentuh pengguna peranti, terokai dengan sentuhan atau dengan gerak isyarat leret.";

    // Dialog Close Button

    labelDialogClose = "Tutup";

} else if (currentPageLanguage === "no") {

    // Remove Job Filter

    labelRemoveFilter = "Fjern filter";

    // Job Alert

    labelAddJobAlert = "Legg til jobbvarsel";
    labelSelectedJobAlerts = "Utvalgte jobbvarsler";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Send inn jobbvarsler";

    // Global Header

    labelPrimaryNavigation = "Hoved";
    labelViewSavedJobs = "Vis lagrede jobber";

    // Save Job Button

    labelSaveJob = "Lagre jobb";

    // Search Form

    labelSearchJobs = "Søk etter jobber";

    // Search Filter

    labelSearchFilter = "Søkefilter";

    // Pagination

    labelPagination = "Paginering";

    // Search Results

    labelLoadingMsg = "Laster inn nye resultater.";
    labelResultsAvailable = "{count} av {total} resultater er nå tilgjengelige.";
    labelResultsSorted = "Resultater sortert etter {label}";

    // New Window

    labelNewWindow = "åpnes i nytt vindu";

    // Search Keyword

    labelSearchKeywordDesc = "Matchende jobblenker vil vises nedenfor mens du skriver.";
    labelSearchKeywordFoundMsg = "{count} samsvarende jobblenker funnet.";
    labelSearchKeywordNotFoundMsg = "Ingen samsvarende jobblenker funnet.";

    // Autocomplete

    labelAutoCompleteDesc = "Når autofullfør-resultater er tilgjengelige, bruk pil opp og pil ned for å se gjennom og Enter for å velge. Brukere av berøringsenheter kan utforske ved å berøre eller sveipe.";

    // Dialog Close Button

    labelDialogClose = "Lukke";

} else if (currentPageLanguage === "pl") {

    // Remove Job Filter

    labelRemoveFilter = "Usuń filtr";

    // Job Alert

    labelAddJobAlert = "Dodaj alert pracy";
    labelSelectedJobAlerts = "Wybrane alerty dotyczące ofert pracy";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Prześlij alerty o pracy";

    // Global Header

    labelPrimaryNavigation = "Główny";
    labelViewSavedJobs = "Wyświetl zapisane oferty pracy";

    // Save Job Button

    labelSaveJob = "Zapisz zadanie";

    // Search Form

    labelSearchJobs = "Szukaj ofert pracy";

    // Search Filter

    labelSearchFilter = "Filtr wyszukiwania";

    // Pagination

    labelPagination = "Paginacja";

    // Search Results

    labelLoadingMsg = "Ładowanie nowych wyników.";
    labelResultsAvailable = "{count} z {total} wyników jest teraz dostępnych.";
    labelResultsSorted = "Wyniki posortowane według {label}";

    // New Window

    labelNewWindow = "otwiera się w nowym oknie";

    // Search Keyword

    labelSearchKeywordDesc = "W miarę wpisywania tekstu poniżej pojawią się pasujące linki do ofert pracy.";
    labelSearchKeywordFoundMsg = "Znaleziono {count} pasujących linków do ofert pracy.";
    labelSearchKeywordNotFoundMsg = "Nie znaleziono pasujących linków do ofert pracy.";

    // Autocomplete

    labelAutoCompleteDesc = "Gdy wyniki autouzupełniania są dostępne, użyj strzałek w górę i w dół, aby je przejrzeć i wybrać Enter. Użytkownicy urządzeń dotykowych mogą przeglądać wyniki dotykiem lub gestami przesuwania.";

    // Dialog Close Button

    labelDialogClose = "Zamknąć";

} else if (currentPageLanguage === "pt") {

    // Remove Job Filter

    labelRemoveFilter = "Remover filtro";

    // Job Alert

    labelAddJobAlert = "Adicionar alerta de emprego";
    labelSelectedJobAlerts = "Alertas de emprego selecionados";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Enviar alertas de emprego";

    // Global Header

    labelPrimaryNavigation = "Principal";
    labelViewSavedJobs = "Ver trabalhos salvos";

    // Save Job Button

    labelSaveJob = "Salvar emprego";

    // Search Form

    labelSearchJobs = "Procurar empregos";

    // Search Filter

    labelSearchFilter = "Filtro de pesquisa";

    // Pagination

    labelPagination = "Paginação";

    // Search Results

    labelLoadingMsg = "Carregando novos resultados.";
    labelResultsAvailable = "{count} de {total} resultados já estão disponíveis.";
    labelResultsSorted = "Resultados ordenados por {label}";

    // New Window

    labelNewWindow = "abre em nova janela";

    // Search Keyword

    labelSearchKeywordDesc = "Os links para vagas de emprego correspondentes aparecerão abaixo conforme você digita.";
    labelSearchKeywordFoundMsg = "{count} links de emprego correspondentes encontrados.";
    labelSearchKeywordNotFoundMsg = "Não foram encontrados links de emprego correspondentes.";

    // Autocomplete

    labelAutoCompleteDesc = "Quando os resultados de preenchimento automático estiverem disponíveis, use as setas para cima e para baixo para revisar e pressione Enter para selecionar. Usuários de dispositivos com tela sensível ao toque podem explorar tocando na tela ou deslizando o dedo na tela.";

    // Dialog Close Button

    labelDialogClose = "Fechar";

} else if (currentPageLanguage === "ro") {

    // Remove Job Filter

    labelRemoveFilter = "Eliminați filtrul";

    // Job Alert

    labelAddJobAlert = "Adăugați o alertă de job";
    labelSelectedJobAlerts = "Alerte de locuri de muncă selectate";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Trimiteți alerte de locuri de muncă";

    // Global Header

    labelPrimaryNavigation = "Principal";
    labelViewSavedJobs = "Vizualizați locurile de muncă salvate";

    // Save Job Button

    labelSaveJob = "Salvați jobul";

    // Search Form

    labelSearchJobs = "Căutare locuri de muncă";

    // Search Filter

    labelSearchFilter = "Filtru de căutare";

    // Pagination

    labelPagination = "Paginare";

    // Search Results

    labelLoadingMsg = "Se încarcă rezultatele noi.";
    labelResultsAvailable = "{count} din {total} rezultate sunt acum disponibile.";
    labelResultsSorted = "Rezultate sortate după {label}";

    // New Window

    labelNewWindow = "se deschide într-o fereastră nouă";

    // Search Keyword

    labelSearchKeywordDesc = "Linkurile către locuri de muncă corespunzătoare vor apărea mai jos pe măsură ce tastați.";
    labelSearchKeywordFoundMsg = "Au fost găsite {count} linkuri de locuri de muncă corespunzătoare.";
    labelSearchKeywordNotFoundMsg = "Nu au fost găsite linkuri către locuri de muncă potrivite.";

    // Autocomplete

    labelAutoCompleteDesc = "Când rezultatele completării automate sunt disponibile, folosiți săgețile sus și jos pentru a le revizui și Enter pentru a selecta. Utilizatorii dispozitivului pot explora prin atingere sau cu gesturi de glisare.";

    // Dialog Close Button

    labelDialogClose = "Aproape";

} else if (currentPageLanguage === "ru") {

    // Remove Job Filter

    labelRemoveFilter = "Удалить фильтр";

    // Job Alert

    labelAddJobAlert = "Добавить оповещение о вакансии";
    labelSelectedJobAlerts = "Уведомления о вакансиях";
    labelCaptcha = "Капча";
    labelSubmitJobAlerts = "Отправить уведомление о вакансиях";

    // Global Header

    labelPrimaryNavigation = "Основной";
    labelViewSavedJobs = "Просмотреть сохраненные вакансии";

    // Save Job Button

    labelSaveJob = "Сохранить вакансию";

    // Search Form

    labelSearchJobs = "Поиск работы";

    // Search Filter

    labelSearchFilter = "Фильтр поиска";

    // Pagination

    labelPagination = "Пагинация";

    // Search Results

    labelLoadingMsg = "Загрузка новых результатов.";
    labelResultsAvailable = "Теперь доступно {count} из {total} результатов.";
    labelResultsSorted = "Результаты отсортированы по {label}";

    // New Window

    labelNewWindow = "открывается в новом окне";

    // Search Keyword

    labelSearchKeywordDesc = "По мере ввода текста ниже будут появляться ссылки на подходящие вакансии.";
    labelSearchKeywordFoundMsg = "Найдено {count} соответствующих ссылок на вакансии.";
    labelSearchKeywordNotFoundMsg = "Ссылки на подходящие вакансии не найдены.";

    // Autocomplete

    labelAutoCompleteDesc = "При наличии результатов автозаполнения используйте стрелки вверх и вниз для просмотра и клавишу Enter для выбора. Пользователи сенсорных устройств могут осуществлять поиск с помощью касаний или жестов смахивания.";

    // Dialog Close Button

    labelDialogClose = "Закрывать";

} else if (currentPageLanguage === "sr") {

    // Remove Job Filter

    labelRemoveFilter = "Уклони филтер";

    // Job Alert

    labelAddJobAlert = "Додај обавештење о послу";
    labelSelectedJobAlerts = "Одабрана обавештења о пословима";
    labelCaptcha = "Капча";
    labelSubmitJobAlerts = "Пошаљи обавештења о пословима";

    // Global Header

    labelPrimaryNavigation = "Главни";
    labelViewSavedJobs = "Погледајте сачуване послове";

    // Save Job Button

    labelSaveJob = "Сачувај посао";

    // Search Form

    labelSearchJobs = "Претрага послова";

    // Search Filter

    labelSearchFilter = "Филтер за претрагу";

    // Pagination

    labelPagination = "Пагинација";

    // Search Results

    labelLoadingMsg = "Учитавање нових резултата.";
    labelResultsAvailable = "Сада је доступно {count} од {total} резултата.";
    labelResultsSorted = "Резултати сортирани по {label}";

    // New Window

    labelNewWindow = "отвара се у новом прозору";

    // Search Keyword

    labelSearchKeywordDesc = "Линкови за послове који одговарају вашим потребама ће се појављивати испод док куцате.";
    labelSearchKeywordFoundMsg = "Пронађено је {count} одговарајућих линкова за послове.";
    labelSearchKeywordNotFoundMsg = "Нису пронађени одговарајући линкови за посао.";

    // Autocomplete

    labelAutoCompleteDesc = "Када су доступни резултати аутоматског довршавања, користите стрелице нагоре и надоле за преглед и ентер за избор. Корисници додирних уређаја могу да истражују додиром или превлачењем.";

    // Dialog Close Button

    labelDialogClose = "Затвори";

} else if (currentPageLanguage === "sk") {

    // Remove Job Filter

    labelRemoveFilter = "Odstrániť filter";

    // Job Alert

    labelAddJobAlert = "Pridať upozornenie na pracovnú ponuku";
    labelSelectedJobAlerts = "Vybrané upozornenia na pracovné ponuky";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Odoslať upozornenia na pracovné ponuky";

    // Global Header

    labelPrimaryNavigation = "Hlavné";
    labelViewSavedJobs = "Zobraziť uložené úlohy";

    // Save Job Button

    labelSaveJob = "Uložiť úlohu";

    // Search Form

    labelSearchJobs = "Hľadať pracovné ponuky";

    // Search Filter

    labelSearchFilter = "Vyhľadávací filter";

    // Pagination

    labelPagination = "Stránkovanie";

    // Search Results

    labelLoadingMsg = "Načítavajú sa nové výsledky.";
    labelResultsAvailable = "K dispozícii je {count} z {total} výsledkov.";
    labelResultsSorted = "Výsledky zoradené podľa {label}";

    // New Window

    labelNewWindow = "otvorí sa v novom okne";

    // Search Keyword

    labelSearchKeywordDesc = "Počas písania sa nižšie zobrazia zodpovedajúce odkazy na pracovné ponuky.";
    labelSearchKeywordFoundMsg = "Nájdených {count} zodpovedajúcich pracovných odkazov.";
    labelSearchKeywordNotFoundMsg = "Nenašli sa žiadne zodpovedajúce pracovné odkazy.";

    // Autocomplete

    labelAutoCompleteDesc = "Keď sú k dispozícii výsledky automatického dopĺňania, použite na kontrolu šípky nahor a nadol a na výber kláves Enter. Používatelia dotykových zariadení môžu vyhľadávať dotykom alebo gestami potiahnutia prstom.";

    // Dialog Close Button

    labelDialogClose = "Zatvoriť";

} else if (currentPageLanguage === "sl") {

    // Remove Job Filter

    labelRemoveFilter = "Odstrani filter";

    // Job Alert

    labelAddJobAlert = "Dodaj opozorilo o delovnem mestu";
    labelSelectedJobAlerts = "Izbrana opozorila o delovnih mestih";
    labelCaptcha = "Kapča";
    labelSubmitJobAlerts = "Pošlji opozorila o delovnih mestih";

    // Global Header

    labelPrimaryNavigation = "Glavni";
    labelViewSavedJobs = "Ogled shranjenih delovnih mest";

    // Save Job Button

    labelSaveJob = "Shrani opravilo";

    // Search Form

    labelSearchJobs = "Iskanje delovnih mest";

    // Search Filter

    labelSearchFilter = "Iskalni filter";

    // Pagination

    labelPagination = "Oštevilčenje strani";

    // Search Results

    labelLoadingMsg = "Nalaganje novih rezultatov.";
    labelResultsAvailable = "Na voljo je {count} od {total} rezultatov.";
    labelResultsSorted = "Rezultati razvrščeni po {label}";

    // New Window

    labelNewWindow = "odpre se v novem oknu";

    // Search Keyword

    labelSearchKeywordDesc = "Med tipkanjem se bodo spodaj prikazale ustrezne povezave do delovnih mest.";
    labelSearchKeywordFoundMsg = "Najdenih je bilo {count} ustreznih povezav za zaposlitev.";
    labelSearchKeywordNotFoundMsg = "Ni najdenih ustreznih povezav za delovna mesta.";

    // Autocomplete

    labelAutoCompleteDesc = "Ko so na voljo rezultati samodokončanja, uporabite puščici gor in dol za pregled in enter za izbiro. Uporabniki naprav z dotikom lahko raziskujejo z dotikom ali s gibi vlečenja.";

    // Dialog Close Button

    labelDialogClose = "Zapri";

} else if (currentPageLanguage === "es") {

    // Remove Job Filter

    labelRemoveFilter = "Quitar filtro";

    // Job Alert

    labelAddJobAlert = "Agregar alerta de empleo";
    labelSelectedJobAlerts = "Alertas de empleo seleccionadas";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Enviar alertas de empleo";

    // Global Header

    labelPrimaryNavigation = "Principal";
    labelViewSavedJobs = "Ver trabajos guardados";

    // Save Job Button

    labelSaveJob = "Guardar empleo";

    // Search Form

    labelSearchJobs = "Buscar empleos";

    // Search Filter

    labelSearchFilter = "Filtro de búsqueda";

    // Pagination

    labelPagination = "Paginación";

    // Search Results

    labelLoadingMsg = "Cargando nuevos resultados.";
    labelResultsAvailable = "Ya están disponibles {count} de {total} resultados.";
    labelResultsSorted = "Resultados ordenados por {label}";

    // New Window

    labelNewWindow = "Se abre en una ventana nueva";

    // Search Keyword

    labelSearchKeywordDesc = "A medida que escribas, aparecerán enlaces a ofertas de empleo que coincidan con tu perfil.";
    labelSearchKeywordFoundMsg = "{count} enlaces de trabajo coincidentes encontrados.";
    labelSearchKeywordNotFoundMsg = "No se encontraron enlaces de empleo que coincidan.";

    // Autocomplete

    labelAutoCompleteDesc = "Cuando haya resultados de autocompletar disponibles, use las flechas arriba y abajo para revisarlos y presione Enter para seleccionar. Los usuarios de dispositivos táctiles pueden explorar mediante gestos táctiles o deslizando el dedo.";

    // Dialog Close Button

    labelDialogClose = "Cerca";

} else if (currentPageLanguage === "sv") {

    // Remove Job Filter

    labelRemoveFilter = "Ta bort filter";

    // Job Alert

    labelAddJobAlert = "Lägg till jobbavisering";
    labelSelectedJobAlerts = "Valda jobbaviseringar";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Skicka jobbaviseringar";

    // Global Header

    labelPrimaryNavigation = "Huvudsaklig";
    labelViewSavedJobs = "Visa sparade jobb";

    // Save Job Button

    labelSaveJob = "Spara jobb";

    // Search Form

    labelSearchJobs = "Sök jobb";

    // Search Filter

    labelSearchFilter = "Sökfilter";

    // Pagination

    labelPagination = "Paginering";

    // Search Results

    labelLoadingMsg = "Laddar nya resultat.";
    labelResultsAvailable = "{count} av {total} resultat är nu tillgängliga.";
    labelResultsSorted = "Resultat sorterade efter {label}";

    // New Window

    labelNewWindow = "öppnas i nytt fönster";

    // Search Keyword

    labelSearchKeywordDesc = "Matchande jobblänkar visas nedan medan du skriver.";
    labelSearchKeywordFoundMsg = "{count} matchande jobblänkar hittades.";
    labelSearchKeywordNotFoundMsg = "Inga matchande jobblänkar hittades.";

    // Autocomplete

    labelAutoCompleteDesc = "När autoslutföranderesultat är tillgängliga, använd uppåt- och nedåtpilarna för att granska och returnera för att välja. Användare av pekskärmen kan utforska genom att peka eller svepa.";

    // Dialog Close Button

    labelDialogClose = "Nära";

} else if (currentPageLanguage === "th") {

    // Remove Job Filter

    labelRemoveFilter = "ลบตัวกรอง";

    // Job Alert

    labelAddJobAlert = "เพิ่มการแจ้งเตือนงาน";
    labelSelectedJobAlerts = "การแจ้งเตือนงานที่เลือก";
    labelCaptcha = "แคปชา";
    labelSubmitJobAlerts = "ส่งการแจ้งเตือนงาน";

    // Global Header

    labelPrimaryNavigation = "หลัก";
    labelViewSavedJobs = "ดูงานที่บันทึกไว้";

    // Save Job Button

    labelSaveJob = "บันทึกงาน";

    // Search Form

    labelSearchJobs = "ค้นหางาน";

    // Search Filter

    labelSearchFilter = "ตัวกรองการค้นหา";

    // Pagination

    labelPagination = "การแบ่งหน้า";

    // Search Results

    labelLoadingMsg = "กำลังโหลดผลลัพธ์ใหม่";
    labelResultsAvailable = "ขณะนี้มีผลลัพธ์ {count} จากทั้งหมด {total} รายการให้ดูแล้ว";
    labelResultsSorted = "ผลลัพธ์เรียงลำดับตาม {label}";

    // New Window

    labelNewWindow = "เปิดในหน้าต่างใหม่";

    // Search Keyword

    labelSearchKeywordDesc = "ลิงก์ตำแหน่งงานที่ตรงกับคุณสมบัติจะปรากฏด้านล่างขณะที่คุณพิมพ์";
    labelSearchKeywordFoundMsg = "พบลิงก์งานที่ตรงกันจำนวน {count} รายการ";
    labelSearchKeywordNotFoundMsg = "ไม่พบลิงก์งานที่ตรงกัน";

    // Autocomplete

    labelAutoCompleteDesc = "เมื่อมีผลลัพธ์การเติมข้อความอัตโนมัติ ให้ใช้ลูกศรขึ้นและลงเพื่อตรวจสอบ และกด Enter เพื่อเลือก สำหรับผู้ใช้อุปกรณ์ระบบสัมผัส ให้สำรวจโดยการสัมผัสหรือใช้ท่าทางปัดนิ้ว";

    // Dialog Close Button

    labelDialogClose = "ปิด";

} else if (currentPageLanguage === "uk") {

    // Remove Job Filter

    labelRemoveFilter = "Видалити фільтр";

    // Job Alert

    labelAddJobAlert = "Додати сповіщення про вакансію";
    labelSelectedJobAlerts = "Вибрані сповіщення про вакансії";
    labelCaptcha = "Капча";
    labelSubmitJobAlerts = "Надіслати сповіщення про вакансії";

    // Global Header

    labelPrimaryNavigation = "Головний";
    labelViewSavedJobs = "Переглянути збережені вакансії";

    // Save Job Button

    labelSaveJob = "Зберегти завдання";

    // Search Form

    labelSearchJobs = "Пошук вакансій";

    // Search Filter

    labelSearchFilter = "Фільтр пошуку";

    // Pagination

    labelPagination = "Пагінація";

    // Search Results

    labelLoadingMsg = "Завантаження нових результатів.";
    labelResultsAvailable = "Доступно {count} з {total} результатів.";
    labelResultsSorted = "Результати відсортовано за {label}";

    // New Window

    labelNewWindow = "відкривається в новому вікні";

    // Search Keyword

    labelSearchKeywordDesc = "Відповідні посилання на вакансії з’являтимуться нижче під час введення тексту.";
    labelSearchKeywordFoundMsg = "Знайдено {count} відповідних посилань на вакансії.";
    labelSearchKeywordNotFoundMsg = "Відповідних посилань на вакансії не знайдено.";

    // Autocomplete

    labelAutoCompleteDesc = "Коли доступні результати автозаповнення, використовуйте стрілки вгору та вниз для перегляду та Enter для вибору. Користувачі сенсорних пристроїв можуть досліджувати дотиком або жестами пальцем.";

    // Dialog Close Button

    labelDialogClose = "Закрити";

} else if (currentPageLanguage === "vi") {

    // Remove Job Filter

    labelRemoveFilter = "Xóa bộ lọc";

    // Job Alert

    labelAddJobAlert = "Thêm thông báo việc làm";
    labelSelectedJobAlerts = "Thông báo việc làm được chọn lọc";
    labelCaptcha = "Mã xác nhận";
    labelSubmitJobAlerts = "Đăng ký nhận thông báo việc làm";

    // Global Header

    labelPrimaryNavigation = "Chủ yếu";
    labelViewSavedJobs = "Xem các công việc đã lưu";

    // Save Job Button

    labelSaveJob = "Lưu công việc";

    // Search Form

    labelSearchJobs = "Tìm việc làm";

    // Search Filter

    labelSearchFilter = "Bộ lọc tìm kiếm";

    // Pagination

    labelPagination = "Đánh số trang";

    // Search Results

    labelLoadingMsg = "Đang tải kết quả mới.";
    labelResultsAvailable = "Hiện đã có {count} trong tổng số {total} kết quả.";
    labelResultsSorted = "Kết quả được sắp xếp theo {label}";

    // New Window

    labelNewWindow = "(mở trong cửa sổ mới)";

    // Search Keyword

    labelSearchKeywordDesc = "Các liên kết việc làm phù hợp sẽ xuất hiện bên dưới khi bạn nhập.";
    labelSearchKeywordFoundMsg = "{count} Đã tìm thấy các liên kết việc làm phù hợp.";
    labelSearchKeywordNotFoundMsg = "Không tìm thấy liên kết việc làm phù hợp.";

    // Autocomplete

    labelAutoCompleteDesc = "Khi kết quả tự động hoàn thành hiển thị, hãy sử dụng các phím mũi tên lên và xuống để xem lại và nhấn Enter để chọn. Người dùng thiết bị cảm ứng có thể khám phá bằng cách chạm hoặc vuốt.";

    // Dialog Close Button

    labelDialogClose = "Đóng";

} else {

    // English (Default)

    // Remove Job Filter

    labelRemoveFilter = "Remove Filter";

    // Job Alert

    labelAddJobAlert = "Add Job Alert";
    labelSelectedJobAlerts = "Selected Job Alerts";
    labelCaptcha = "Captcha";
    labelSubmitJobAlerts = "Submit Job Alerts";

    // Global Header

    labelPrimaryNavigation = "Main";
    labelViewSavedJobs = "View Saved Jobs";

    // Save Job Button

    labelSaveJob = "Save Job";

    // Search Form

    labelSearchJobs = "Search Jobs";

    // Search Filter

    labelSearchFilter = "Search Filter";

    // Pagination

    labelPagination = "Pagination";

    // Search Results

    labelLoadingMsg = "Loading new results.";
    labelResultsAvailable = "{count} of {total} results are now available.";
    labelResultsSorted = "Results sorted by {label}.";

    // New Window

    labelNewWindow = "opens in new window";

    // Search Keyword

    labelSearchKeywordDesc = "Matching job links will appear below as you type.";
    labelSearchKeywordFoundMsg = "{count} matching job links found.";
    labelSearchKeywordNotFoundMsg = "No matching job links found.";

    // Autocomplete

    labelAutoCompleteDesc = "When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.";

    // Dialog Close Button

    labelDialogClose = "Close";
}

export {
  labelAddJobAlert,
  labelAutoCompleteDesc,
  labelCaptcha,
  labelDialogClose,
  labelLoadingMsg,
  labelNewWindow,
  labelPagination,
  labelPrimaryNavigation,
  labelRemoveFilter,
  labelResultsAvailable,
  labelResultsSorted,
  labelSaveJob,
  labelSearchFilter,
  labelSearchJobs,
  labelSearchKeywordDesc,
  labelSearchKeywordFoundMsg,
  labelSearchKeywordNotFoundMsg,
  labelSelectedJobAlerts,
  labelSubmitJobAlerts,
  labelViewSavedJobs
};
