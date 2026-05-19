const STORAGE_KEY = "nailbooker_v1";
const today = new Date();

function formatDateInput(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const todayStr = formatDateInput(today);


const SUPPORTED_LANGUAGES = [
  { code: "nl-BE", label: "Nederlands" },
  { code: "en-GB", label: "English" },
  { code: "fr-FR", label: "Français" }
];

const SUPPORTED_CURRENCIES = [
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "USD", label: "Dollar", symbol: "$" },
  { code: "GBP", label: "Britse pond", symbol: "£" }
];

const DEFAULT_LANGUAGE = "nl-BE";
const DEFAULT_CURRENCY = "EUR";

const i18n = {
  "nl-BE": {
    agenda: "Agenda", revenue: "Omzet", clients: "Klanten", services: "Diensten", paymentMethods: "Betaalwijze", statistics: "Statistieken", settings: "Instellingen", account: "Account",
    save: "Opslaan", cancel: "Annuleren", register: "Registreren", login: "Inloggen", logout: "Uitloggen", editProfile: "Gegevens wijzigen", changePassword: "Wachtwoord wijzigen",
    language: "Taal", currency: "Valuta", appPreferences: "App-voorkeuren", currencyChangeWarning: "Nieuwe afspraken gebruiken voortaan deze valuta. Bestaande afspraken en omzet blijven in hun oorspronkelijke munteenheid staan en worden niet omgerekend.",
    firstName: "Voornaam", lastName: "Naam", salonName: "Salonnaam", vatNumber: "BTW-nummer", email: "E-mail", password: "Wachtwoord", confirmPassword: "Bevestig wachtwoord", optional: "optioneel",
    noRevenueForSelection: "Geen omzetgegevens voor deze selectie.", paid: "Betaald", unpaid: "Onbetaald", paymentMethod: "Betaalwijze", unknown: "Onbekend", settingsSaved: "Instellingen opgeslagen.", settingsSavedDevice: "Instellingen opgeslagen op dit toestel.", saveSettings: "Instellingen opslaan", ok: "OK", confirmTitle: "Bevestiging", confirm: "Bevestigen"
  },
  "en-GB": {
    agenda: "Agenda", revenue: "Revenue", clients: "Clients", services: "Services", paymentMethods: "Payment methods", statistics: "Statistics", settings: "Settings", account: "Account",
    save: "Save", cancel: "Cancel", register: "Register", login: "Log in", logout: "Log out", editProfile: "Edit details", changePassword: "Change password",
    language: "Language", currency: "Currency", appPreferences: "App preferences", currencyChangeWarning: "New appointments will use this currency from now on. Existing appointments and revenue remain in their original currency and are not converted.",
    firstName: "First name", lastName: "Last name", salonName: "Salon name", vatNumber: "VAT number", email: "Email", password: "Password", confirmPassword: "Confirm password", optional: "optional",
    noRevenueForSelection: "No revenue data for this selection.", paid: "Paid", unpaid: "Unpaid", paymentMethod: "Payment method", unknown: "Unknown", settingsSaved: "Settings saved.", settingsSavedDevice: "Settings saved on this device.", saveSettings: "Save settings", ok: "OK", confirmTitle: "Confirmation", confirm: "Confirm"
  },
  "fr-FR": {
    agenda: "Agenda", revenue: "Chiffre d’affaires", clients: "Clients", services: "Services", paymentMethods: "Modes de paiement", statistics: "Statistiques", settings: "Paramètres", account: "Compte",
    save: "Enregistrer", cancel: "Annuler", register: "S’inscrire", login: "Connexion", logout: "Déconnexion", editProfile: "Modifier les données", changePassword: "Modifier le mot de passe",
    language: "Langue", currency: "Devise", appPreferences: "Préférences de l’application", currencyChangeWarning: "Les nouveaux rendez-vous utiliseront désormais cette devise. Les rendez-vous et revenus existants restent dans leur devise d’origine et ne sont pas convertis.",
    firstName: "Prénom", lastName: "Nom", salonName: "Nom du salon", vatNumber: "Numéro de TVA", email: "E-mail", password: "Mot de passe", confirmPassword: "Confirmer le mot de passe", optional: "optionnel",
    noRevenueForSelection: "Aucune donnée de chiffre d’affaires pour cette sélection.", paid: "Payé", unpaid: "Impayé", paymentMethod: "Mode de paiement", unknown: "Inconnu", settingsSaved: "Paramètres enregistrés.", settingsSavedDevice: "Paramètres enregistrés sur cet appareil.", saveSettings: "Enregistrer les paramètres", ok: "OK", confirmTitle: "Confirmation", confirm: "Confirmer"
  }
};

const i18nExtra = {
  "nl-BE": {
    planning: "Planning", notifications: "Meldingen", extras: "Interessante extra's", defaultBreak: "Standaard pauze tussen 2 afspraken (min)", overlapWarnings: "Overlapwaarschuwingen", overlapWarningsHint: "Waarschuw als een afspraak overlapt met een bestaande afspraak, rekening houdend met duur en pauze.", enableNotifications: "Meldingen inschakelen", enableNotificationsHint: "Voorbereid voor afspraakherinneringen in de app.", reminderBefore: "Herinnering vóór afspraak", savePending: "Instellingen opslaan...", notificationsOff: "Meldingen zijn uitgeschakeld.", notificationsActive: "Meldingen zijn actief op dit toestel zolang browser of app meldingen ondersteunt.", notificationsBlocked: "Meldingen zijn geblokkeerd in je browserinstellingen.", notificationsUnsupported: "Deze browser ondersteunt geen webmeldingen.", notificationsPermissionHint: "Schakel meldingen in en geef toestemming om herinneringen te tonen.", appointmentsOn: "Afspraken op", noAppointmentsOnDay: "Geen afspraken op deze dag.", noClientsFound: "Geen klanten gevonden.", noPhone: "Geen gsm", appointmentSingular: "afspraak", appointmentPlural: "afspraken", noActiveServices: "Nog geen actieve diensten.", inactive: "inactief", showInactiveServices: "Toon inactieve diensten", allPaymentMethods: "Alle betaalwijzen", allStatuses: "Alle statussen", day: "Dag", week: "Week", month: "Maand", year: "Jaar", today: "Vandaag", total: "Totaal", chartTitle: "Grafische weergave", perDay: "Per dag", revenueOn: "Omzet op", revenueReport: "Omzetrapport", paymentMethodTitle: "Betaalwijze", unknownCustomer: "Onbekende klant", chooseMonth: "Maand kiezen", choose: "Kies", newAppointment: "Nieuwe afspraak", editAppointment: "Afspraak bewerken", customer: "Klant", date: "Datum", time: "Tijd", service: "Dienst", duration: "Duur (min)", price: "Prijs", status: "Status", planned: "Gepland", completed: "Afgerond", newClient: "Nieuwe klant", phone: "Telefoon", note: "Notitie", newService: "Nieuwe dienst", serviceName: "Naam dienst", newPaymentMethod: "Nieuwe betaalwijze", paymentMethodName: "Naam betaalwijze", editProfileTitle: "Profiel bewerken", currentPassword: "Huidig wachtwoord", newPassword: "Nieuw wachtwoord", message: "Melding", registerHere: "Nog geen account? Registreer hier"
  },
  "en-GB": {
    planning: "Planning", notifications: "Notifications", extras: "Useful extras", defaultBreak: "Default break between 2 appointments (min)", overlapWarnings: "Overlap warnings", overlapWarningsHint: "Warn when an appointment overlaps with an existing appointment, taking duration and break time into account.", enableNotifications: "Enable notifications", enableNotificationsHint: "Prepared for appointment reminders in the app.", reminderBefore: "Reminder before appointment", savePending: "Saving settings...", notificationsOff: "Notifications are disabled.", notificationsActive: "Notifications are active on this device while the browser or app supports notifications.", notificationsBlocked: "Notifications are blocked in your browser settings.", notificationsUnsupported: "This browser does not support web notifications.", notificationsPermissionHint: "Enable notifications and allow permission to show reminders.", appointmentsOn: "Appointments on", noAppointmentsOnDay: "No appointments on this day.", noClientsFound: "No clients found.", noPhone: "No mobile", appointmentSingular: "appointment", appointmentPlural: "appointments", noActiveServices: "No active services yet.", inactive: "inactive", showInactiveServices: "Show inactive services", allPaymentMethods: "All payment methods", allStatuses: "All statuses", day: "Day", week: "Week", month: "Month", year: "Year", today: "Today", total: "Total", chartTitle: "Chart view", perDay: "Per day", revenueOn: "Revenue on", revenueReport: "Revenue report", paymentMethodTitle: "Payment method", unknownCustomer: "Unknown client", chooseMonth: "Choose month", choose: "Choose", newAppointment: "New appointment", editAppointment: "Edit appointment", customer: "Client", date: "Date", time: "Time", service: "Service", duration: "Duration (min)", price: "Price", status: "Status", planned: "Planned", completed: "Completed", newClient: "New client", phone: "Phone", note: "Note", newService: "New service", serviceName: "Service name", newPaymentMethod: "New payment method", paymentMethodName: "Payment method name", editProfileTitle: "Edit profile", currentPassword: "Current password", newPassword: "New password", message: "Message", registerHere: "No account yet? Register here"
  },
  "fr-FR": {
    planning: "Planning", notifications: "Notifications", extras: "Extras utiles", defaultBreak: "Pause standard entre 2 rendez-vous (min)", overlapWarnings: "Avertissements de chevauchement", overlapWarningsHint: "Avertir lorsqu’un rendez-vous chevauche un rendez-vous existant, en tenant compte de la durée et de la pause.", enableNotifications: "Activer les notifications", enableNotificationsHint: "Prévu pour les rappels de rendez-vous dans l’application.", reminderBefore: "Rappel avant le rendez-vous", savePending: "Enregistrement des paramètres...", notificationsOff: "Les notifications sont désactivées.", notificationsActive: "Les notifications sont actives sur cet appareil tant que le navigateur ou l’application les prend en charge.", notificationsBlocked: "Les notifications sont bloquées dans les paramètres de votre navigateur.", notificationsUnsupported: "Ce navigateur ne prend pas en charge les notifications web.", notificationsPermissionHint: "Activez les notifications et autorisez-les pour afficher les rappels.", appointmentsOn: "Rendez-vous le", noAppointmentsOnDay: "Aucun rendez-vous ce jour-là.", noClientsFound: "Aucun client trouvé.", noPhone: "Pas de GSM", appointmentSingular: "rendez-vous", appointmentPlural: "rendez-vous", noActiveServices: "Aucun service actif pour le moment.", inactive: "inactif", showInactiveServices: "Afficher les services inactifs", allPaymentMethods: "Tous les modes de paiement", allStatuses: "Tous les statuts", day: "Jour", week: "Semaine", month: "Mois", year: "Année", today: "Aujourd’hui", total: "Total", chartTitle: "Vue graphique", perDay: "Par jour", revenueOn: "Chiffre d’affaires le", revenueReport: "Rapport du chiffre d’affaires", paymentMethodTitle: "Mode de paiement", unknownCustomer: "Client inconnu", chooseMonth: "Choisir le mois", choose: "Choisir", newAppointment: "Nouveau rendez-vous", editAppointment: "Modifier le rendez-vous", customer: "Client", date: "Date", time: "Heure", service: "Service", duration: "Durée (min)", price: "Prix", status: "Statut", planned: "Planifié", completed: "Terminé", newClient: "Nouveau client", phone: "Téléphone", note: "Note", newService: "Nouveau service", serviceName: "Nom du service", newPaymentMethod: "Nouveau mode de paiement", paymentMethodName: "Nom du mode de paiement", editProfileTitle: "Modifier le profil", currentPassword: "Mot de passe actuel", newPassword: "Nouveau mot de passe", message: "Message", registerHere: "Pas encore de compte ? Inscrivez-vous ici"
  }
};
Object.keys(i18nExtra).forEach(lang => Object.assign(i18n[lang], i18nExtra[lang]));

const i18nMore = {
  "nl-BE": {
    mondayShort:"Ma", tuesdayShort:"Di", wednesdayShort:"Wo", thursdayShort:"Do", fridayShort:"Vr", saturdayShort:"Za", sundayShort:"Zo",
    searchClientPlaceholder:"Zoek klant...", searchAppointmentCustomerPlaceholder:"Zoek op naam, telefoon of e-mail...", searchServicePlaceholder:"Zoek dienst...",
    delete:"Verwijderen", edit:"Bewerk", editClient:"Klant bewerken", editService:"Dienst bewerken", editPaymentMethod:"Betaalwijze bewerken", reactivateService:"Dienst opnieuw actief zetten", reactivateServiceHint:"De dienst verschijnt opnieuw in de actieve dienstenlijst en bij nieuwe afspraken.",
    customerNumber:"Klantnummer", appointments:"Afspraken", totalLower:"totaal", noAppointmentsYet:"Nog geen afspraken.", noPaymentMethods:"Nog geen betaalwijzen.", paymentSingular:"betaling", paymentPlural:"betalingen",
    customerCount:"Aantal klanten", pastAppointments:"Afgeronde afspraken", futureAppointments:"Geplande afspraken", totalRevenueUntilToday:"Totale omzet tot vandaag", chosenServices:"Gekozen behandelingen", revenueByService:"Omzet per behandeling", chosenPaymentMethod:"Gekozen betaalwijze", topCustomers:"Top klanten", all:"Alle", noCustomerStats:"Nog geen klantgegevens beschikbaar.", more:"Meer...", less:"Minder",
    serviceNameRequired:"Geef een naam voor de dienst in.", duplicateServiceTitle:"Dubbele dienstnaam", saveAnyway:"Toch opslaan", saveFailed:"Opslaan mislukt", duplicateServiceMessage:"Er bestaat al een dienst met de naam \"{name}\".\n\nWil je toch opslaan? Dan wordt deze dienst opgeslagen als \"{uniqueName}\".", chooseDate:"Kies datum", chooseTime:"Kies tijd", chooseCustomer:"Kies een klant...", chooseService:"Kies een dienst...", choosePaymentMethod:"Kies een betaalwijze...", chooseConfirm:"Kies", dayRevenue:"Dagomzet", weekRevenue:"Weekomzet", monthRevenue:"Maandomzet", yearRevenue:"Jaaromzet"
  },
  "en-GB": {
    mondayShort:"Mon", tuesdayShort:"Tue", wednesdayShort:"Wed", thursdayShort:"Thu", fridayShort:"Fri", saturdayShort:"Sat", sundayShort:"Sun",
    searchClientPlaceholder:"Search client...", searchAppointmentCustomerPlaceholder:"Search by name, phone or email...", searchServicePlaceholder:"Search service...",
    delete:"Delete", edit:"Edit", editClient:"Edit client", editService:"Edit service", editPaymentMethod:"Edit payment method", reactivateService:"Reactivate service", reactivateServiceHint:"The service will appear again in the active services list and for new appointments.",
    customerNumber:"Client number", appointments:"Appointments", totalLower:"total", noAppointmentsYet:"No appointments yet.", noPaymentMethods:"No payment methods yet.", paymentSingular:"payment", paymentPlural:"payments",
    customerCount:"Number of clients", pastAppointments:"Completed appointments", futureAppointments:"Planned appointments", totalRevenueUntilToday:"Total revenue until today", chosenServices:"Selected services", revenueByService:"Revenue per service", chosenPaymentMethod:"Selected payment method", topCustomers:"Top clients", all:"All", noCustomerStats:"No client data available yet.", more:"More...", less:"Less",
    serviceNameRequired:"Enter a service name.", duplicateServiceTitle:"Duplicate service name", saveAnyway:"Save anyway", saveFailed:"Save failed", duplicateServiceMessage:"A service named \"{name}\" already exists.\n\nDo you still want to save it? This service will be saved as \"{uniqueName}\".", chooseDate:"Choose date", chooseTime:"Choose time", chooseCustomer:"Choose a client...", chooseService:"Choose a service...", choosePaymentMethod:"Choose a payment method...", chooseConfirm:"Choose", dayRevenue:"Daily revenue", weekRevenue:"Weekly revenue", monthRevenue:"Monthly revenue", yearRevenue:"Yearly revenue"
  },
  "fr-FR": {
    mondayShort:"Lu", tuesdayShort:"Ma", wednesdayShort:"Me", thursdayShort:"Je", fridayShort:"Ve", saturdayShort:"Sa", sundayShort:"Di",
    searchClientPlaceholder:"Rechercher un client...", searchAppointmentCustomerPlaceholder:"Rechercher par nom, téléphone ou e-mail...", searchServicePlaceholder:"Rechercher un service...",
    delete:"Supprimer", edit:"Modifier", editClient:"Modifier le client", editService:"Modifier le service", editPaymentMethod:"Modifier le mode de paiement", reactivateService:"Réactiver le service", reactivateServiceHint:"Le service réapparaîtra dans la liste des services actifs et pour les nouveaux rendez-vous.",
    customerNumber:"Numéro client", appointments:"Rendez-vous", totalLower:"au total", noAppointmentsYet:"Pas encore de rendez-vous.", noPaymentMethods:"Aucun mode de paiement pour le moment.", paymentSingular:"paiement", paymentPlural:"paiements",
    customerCount:"Nombre de clients", pastAppointments:"Rendez-vous terminés", futureAppointments:"Rendez-vous planifiés", totalRevenueUntilToday:"Chiffre d’affaires total jusqu’à aujourd’hui", chosenServices:"Soins choisis", revenueByService:"Chiffre d’affaires par soin", chosenPaymentMethod:"Mode de paiement choisi", topCustomers:"Meilleurs clients", all:"Tous", noCustomerStats:"Aucune donnée client disponible pour le moment.", more:"Plus...", less:"Moins",
    serviceNameRequired:"Indiquez un nom de service.", duplicateServiceTitle:"Nom de service en double", saveAnyway:"Enregistrer quand même", saveFailed:"Échec de l’enregistrement", duplicateServiceMessage:"Un service nommé \"{name}\" existe déjà.\n\nVoulez-vous quand même l’enregistrer ? Ce service sera enregistré sous \"{uniqueName}\".", chooseDate:"Choisir la date", chooseTime:"Choisir l’heure", chooseCustomer:"Choisir un client...", chooseService:"Choisir un service...", choosePaymentMethod:"Choisir un mode de paiement...", chooseConfirm:"Choisir", dayRevenue:"Chiffre d’affaires journalier", weekRevenue:"Chiffre d’affaires hebdomadaire", monthRevenue:"Chiffre d’affaires mensuel", yearRevenue:"Chiffre d’affaires annuel"
  }
};
Object.keys(i18nMore).forEach(lang => Object.assign(i18n[lang], i18nMore[lang]));


let currentProfilePreferences = { language: DEFAULT_LANGUAGE, currency: DEFAULT_CURRENCY };

function normalizeLanguage(code) {
  return SUPPORTED_LANGUAGES.some(item => item.code === code) ? code : DEFAULT_LANGUAGE;
}

function normalizeCurrency(code) {
  return SUPPORTED_CURRENCIES.some(item => item.code === code) ? code : DEFAULT_CURRENCY;
}

function getCurrentLanguage() {
  return normalizeLanguage(currentProfilePreferences.language || getData()?.settings?.language || DEFAULT_LANGUAGE);
}

function getCurrentCurrency() {
  return normalizeCurrency(currentProfilePreferences.currency || getData()?.settings?.currency || DEFAULT_CURRENCY);
}

function t(key) {
  const lang = getCurrentLanguage();
  return i18n[lang]?.[key] || i18n[DEFAULT_LANGUAGE]?.[key] || key;
}

function getCurrencyLabel(code) {
  const currency = SUPPORTED_CURRENCIES.find(item => item.code === normalizeCurrency(code));
  return currency ? `${currency.label} (${currency.code})` : code;
}

function buildLanguageOptions(selected = DEFAULT_LANGUAGE) {
  const safe = normalizeLanguage(selected);
  return SUPPORTED_LANGUAGES.map(item => `<option value="${item.code}"${item.code === safe ? " selected" : ""}>${item.label}</option>`).join("");
}

function buildCurrencyOptions(selected = DEFAULT_CURRENCY) {
  const safe = normalizeCurrency(selected);
  return SUPPORTED_CURRENCIES.map(item => `<option value="${item.code}"${item.code === safe ? " selected" : ""}>${item.label} (${item.symbol})</option>`).join("");
}

function updateStaticI18n() {
  document.documentElement.lang = getCurrentLanguage().slice(0, 2);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });

  const setText = (selector, key) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = t(key);
  };
  const setHtml = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  };

  const selectorMap = [
    ["#revenueChartTitle", "chartTitle"],
    ["#revenueChartSubtitle", "perDay"],
    ["#jumpToTodayBtn", "today"],
    ['label[for="settingsDefaultBreakMinutes"]', "defaultBreak"],
    ['label[for="settingsReminderMinutes"]', "reminderBefore"],
    ['label[for="loginEmail"]', "email"],
    ['label[for="loginPassword"]', "password"],
    ['#openRegisterDialogBtn', "registerHere"],
    ['#monthPickerDialog h3', "chooseMonth"],
    ['label[for="monthSelect"]', "month"],
    ['label[for="yearSelect"]', "year"],
    ['label[for="appointmentCustomerSearch"]', "customer"],
    ['label[for="appointmentDate"]', "date"],
    ['label[for="appointmentTime"]', "time"],
    ['label[for="appointmentServiceSearch"]', "service"],
    ['label[for="appointmentDuration"]', "duration"],
    ['label[for="appointmentPrice"]', "price"],
    ['label[for="appointmentStatus"]', "status"],
    ['label[for="clientFirstName"]', "firstName"],
    ['label[for="clientLastName"]', "lastName"],
    ['label[for="clientPhone"]', "phone"],
    ['label[for="clientEmail"]', "email"],
    ['label[for="clientNote"]', "note"],
    ['label[for="serviceName"]', "serviceName"],
    ['label[for="serviceDuration"]', "duration"],
    ['label[for="servicePrice"]', "price"],
    ['label[for="paymentMethodName"]', "paymentMethodName"],
    ['label[for="registerFirstName"]', "firstName"],
    ['label[for="registerLastName"]', "lastName"],
    ['label[for="registerEmail"]', "email"],
    ['label[for="registerPassword"]', "password"],
    ['label[for="registerPasswordConfirm"]', "confirmPassword"],
    ['label[for="editFirstName"]', "firstName"],
    ['label[for="editLastName"]', "lastName"],
    ['label[for="currentPassword"]', "currentPassword"],
    ['label[for="newPassword"]', "newPassword"],
    ['label[for="confirmPassword"]', "confirmPassword"],
    ['#passwordDialog h3', "changePassword"],
    ['#appMessageDialogTitle', "message"],
    ['#appointmentWheelPickerTitle', "choose"],
    ['#revenueWheelPickerTitle', "choose"]
  ];
  selectorMap.forEach(([selector, key]) => setText(selector, key));

  setHtml('label[for="registerSalonName"]', `${t("salonName")} <span class="optional-label">${t("optional")}</span>`);
  setHtml('label[for="registerVatNumber"]', `${t("vatNumber")} <span class="optional-label">${t("optional")}</span>`);
  setHtml('label[for="editSalonName"]', `${t("salonName")} <span class="optional-label">${t("optional")}</span>`);
  setHtml('label[for="editVatNumber"]', `${t("vatNumber")} <span class="optional-label">${t("optional")}</span>`);

  document.querySelectorAll(".account-data-label").forEach(el => {
    const text = el.textContent.trim().toLowerCase();
    const map = {
      "voornaam": "firstName", "first name": "firstName", "prénom": "firstName",
      "familienaam": "lastName", "naam": "lastName", "last name": "lastName", "nom": "lastName",
      "salonnaam": "salonName", "salon name": "salonName", "nom du salon": "salonName",
      "btw-nummer": "vatNumber", "vat number": "vatNumber", "numéro de tva": "vatNumber",
      "e-mail": "email", "email": "email",
      "wachtwoord": "password", "password": "password", "mot de passe": "password"
    };
    const key = map[text];
    if (key) el.textContent = t(key);
  });

  const revenuePeriodKeys = ["day", "week", "month", "year"];
  document.querySelectorAll(".revenue-period-title").forEach((el, index) => {
    const key = revenuePeriodKeys[index];
    if (key) el.textContent = t(key);
  });

  const revenueMainKeys = ["total", "paid", "unpaid"];
  document.querySelectorAll(".revenue-main-label").forEach((el, index) => {
    const key = revenueMainKeys[index];
    if (key) el.textContent = t(key);
  });

  const settingsLabels = document.querySelectorAll("#settingsScreen .detail-label");
  [[0, "planning"], [1, "notifications"], [3, "extras"]].forEach(([index, key]) => {
    if (settingsLabels[index]) settingsLabels[index].textContent = t(key);
  });

  const authLabel = document.querySelector("#accountGuestView .detail-label");
  if (authLabel) authLabel.textContent = t("login");

  const statusFilter = document.getElementById("revenuePaymentStatusFilter");
  if (statusFilter) {
    const currentValue = statusFilter.value;
    statusFilter.innerHTML = `
      <option value="">${t("allStatuses")}</option>
      <option value="paid">${t("paid")}</option>
      <option value="unpaid">${t("unpaid")}</option>
    `;
    statusFilter.value = currentValue;
  }

  const periodType = document.getElementById("revenuePeriodType");
  if (periodType) {
    const currentValue = periodType.value;
    periodType.innerHTML = `
      <option value="day">${t("day")}</option>
      <option value="week">${t("week")}</option>
      <option value="month">${t("month")}</option>
      <option value="year">${t("year")}</option>
    `;
    periodType.value = currentValue;
  }

  const appointmentStatus = document.getElementById("appointmentStatus");
  if (appointmentStatus) {
    const currentValue = appointmentStatus.value;
    appointmentStatus.innerHTML = `
      <option value="gepland">${t("planned")}</option>
      <option value="afgerond">${t("completed")}</option>
      <option value="no-show">No-show</option>
    `;
    appointmentStatus.value = currentValue;
  }

  const weekdayKeys = ["mondayShort", "tuesdayShort", "wednesdayShort", "thursdayShort", "fridayShort", "saturdayShort", "sundayShort"];
  document.querySelectorAll(".weekday-row span").forEach((el, index) => {
    if (weekdayKeys[index]) el.textContent = t(weekdayKeys[index]);
  });

  [["#clientSearch", "searchClientPlaceholder"], ["#appointmentCustomerSearch", "searchAppointmentCustomerPlaceholder"], ["#appointmentServiceSearch", "searchServicePlaceholder"]].forEach(([selector, key]) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("placeholder", t(key));
  });

  [["#loginBtn", "login"], ["#logoutBtn", "logout"], ["#editProfileBtn", "editProfile"], ["#changePasswordBtn", "changePassword"], ["#deleteAppointmentBtn", "delete"], ["#deleteServiceBtn", "delete"], ["#deletePaymentMethodBtn", "delete"], ["#appointmentDateDisplayBtn", "chooseDate"], ["#appointmentTimeDisplayBtn", "chooseTime"]].forEach(([selector, key]) => setText(selector, key));

  document.querySelectorAll('button[data-close="appointmentDialog"], button[data-close="clientDialog"], button[data-close="serviceDialog"], button[data-close="paymentMethodDialog"], button[data-close="passwordDialog"], button[data-close="editProfileDialog"]').forEach(btn => {
    if (!btn.classList.contains("icon-btn")) btn.textContent = t("cancel");
  });
  document.querySelectorAll('#appointmentForm button[type="submit"], #clientForm button[type="submit"], #serviceForm button[type="submit"], #paymentMethodForm button[type="submit"], #passwordForm button[type="submit"], #editProfileForm button[type="submit"]').forEach(btn => {
    btn.textContent = t("save");
  });

  const overlapLabel = document.querySelector('label[for="settingsOverlapWarningsEnabled"]');
  if (overlapLabel) {
    const strong = overlapLabel.querySelector('strong');
    const small = overlapLabel.querySelector('small');
    if (strong) strong.textContent = t("overlapWarnings");
    if (small) small.textContent = t("overlapWarningsHint");
  }
  const notificationLabel = document.querySelector('label[for="settingsNotificationsEnabled"]');
  if (notificationLabel) {
    const strong = notificationLabel.querySelector('strong');
    const small = notificationLabel.querySelector('small');
    if (strong) strong.textContent = t("enableNotifications");
    if (small) small.textContent = t("enableNotificationsHint");
  }
  const serviceReactivate = document.querySelector('#serviceReactivateWrap');
  if (serviceReactivate) {
    const strong = serviceReactivate.querySelector('strong');
    const small = serviceReactivate.querySelector('small');
    if (strong) strong.textContent = t("reactivateService");
    if (small) small.textContent = t("reactivateServiceHint");
  }

  const screenTitle = document.getElementById("screenTitle");
  if (screenTitle) screenTitle.textContent = getScreenTitle(state.currentScreen, screenTitle.textContent);

  applyNavStyleActionButtons();
}

const state = {
  currentScreen: "agendaScreen",
  currentYear: today.getFullYear(),
  currentMonth: today.getMonth(),
  selectedDate: todayStr,
  selectedClientId: null,
  previousMainScreen: "clientsScreen",
  clientLetter: "",
  settingsSavePending: false,
  statsTopCustomersVisible: 10,
  revenueInitialized: false,
  revenueSelectedDateSynced: null,
  revenueSyncSelectedDateOnOpen: true,
  showInactiveServices: false
};

const monthNames = [
  "JANUARI", "FEBRUARI", "MAART", "APRIL", "MEI", "JUNI",
  "JULI", "AUGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DECEMBER"
];

const longMonthNames = [
  "januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december"
];

function getMonthNameLong(monthIndex) {
  const d = new Date(2026, Number(monthIndex) || 0, 1);
  return new Intl.DateTimeFormat(getCurrentLanguage(), { month: "long" }).format(d);
}

function getMonthNameUpper(monthIndex) {
  return getMonthNameLong(monthIndex).toLocaleUpperCase(getCurrentLanguage());
}

function capitalizeFirst(value) {
  const text = String(value || "");
  return text ? text.charAt(0).toLocaleUpperCase(getCurrentLanguage()) + text.slice(1) : text;
}

const defaultPaymentMethods = [
  { id: 1, name: "Cash", sortOrder: 1 },
  { id: 2, name: "Payconiq", sortOrder: 2 },
  { id: 3, name: "Bancontact", sortOrder: 3 },
  { id: 4, name: "Kaart", sortOrder: 4 },
  { id: 5, name: "Overschrijving", sortOrder: 5 },
  { id: 6, name: "Andere", sortOrder: 6 }
];

const revenuePickerState = {
  mode: "year",
  columns: [],
  selected: {}
};

const notificationTimers = new Map();
let notificationHeartbeatId = null;

const paymentPopoverState = {
  appointmentId: null,
  anchorRect: null
};


function addDaysStr(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return formatDateInput(d);
}

function getDefaultSettings() {
  return {
    defaultBreakMinutes: 10,
    notificationsEnabled: false,
    reminderMinutes: 30,
    overlapWarningsEnabled: true,
    language: DEFAULT_LANGUAGE,
    currency: DEFAULT_CURRENCY
  };
}

function normalizeData(data) {
  const defaults = getDefaultSettings();
  const safe = data && typeof data === "object" ? data : {};
  const paymentMethods = normalizePaymentMethods(safe.paymentMethods);

  const appointments = Array.isArray(safe.appointments) ? safe.appointments.map(appointment => {
    const paymentMethodName = appointment?.paymentMethodName
      || appointment?.paymentMethodLabel
      || appointment?.paymentMethod
      || null;

    return {
      ...appointment,
      paymentMethodName: paymentMethodName ? String(paymentMethodName).trim() : null,
      currency: normalizeCurrency(appointment?.currency || safe.settings?.currency || DEFAULT_CURRENCY)
    };
  }) : [];

  return {
    customers: Array.isArray(safe.customers) ? safe.customers : [],
    services: Array.isArray(safe.services) ? safe.services.map(service => ({
      ...service,
      isActive: service?.isActive !== false
    })) : [],
    appointments,
    paymentMethods,
    settings: {
      ...defaults,
      ...(safe.settings || {})
    }
  };
}

function seedData() {
  if (localStorage.getItem(STORAGE_KEY)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeData({})));
}

function getData() {
  return normalizeData(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"));
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeData(data)));
}


function normalizePaymentMethods(items) {
  const source = Array.isArray(items) && items.length ? items : defaultPaymentMethods;
  return source
    .map((item, index) => {
      if (typeof item === "string") {
        return { id: index + 1, name: item, sortOrder: index + 1 };
      }
      const id = Number(item?.id);
      const sortOrder = Number(item?.sortOrder ?? item?.sort_order ?? index + 1);
      const name = String(item?.name || item?.label || "").trim();
      if (!name) return null;
      return {
        id: Number.isFinite(id) ? id : index + 1,
        name,
        sortOrder: Number.isFinite(sortOrder) ? sortOrder : index + 1
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name, "nl-BE"));
}

function getPaymentMethods(data = getData()) {
  return normalizePaymentMethods(data?.paymentMethods);
}

function paymentMethodNameById(data, id) {
  if (id == null || id === "") return null;
  const method = getPaymentMethods(data).find(item => String(item.id) === String(id));
  return method?.name || null;
}

function paymentMethodNameForAppointment(appointment, data = getData()) {
  if (!appointment) return "";
  return appointment.paymentMethodName || "";
}

function buildPaymentMethodOptions(methods, selectedValue = "") {
  return methods.map(method => {
    const selected = String(method.name) === String(selectedValue) ? ' selected' : '';
    return `<option value="${method.name}"${selected}>${method.name}</option>`;
  }).join("");
}

function getRevenuePaymentFilterOptions(data = getData()) {
  const names = new Set();
  getPaymentMethods(data).forEach(method => {
    if (method.name) names.add(method.name);
  });
  (data.appointments || []).forEach(appointment => {
    const name = paymentMethodNameForAppointment(appointment, data);
    if (name) names.add(name);
  });
  return Array.from(names).sort((a, b) => a.localeCompare(b, "nl-BE"));
}

function euro(value, currency = getCurrentCurrency()) {
  return new Intl.NumberFormat(getCurrentLanguage(), {
    style: "currency",
    currency: normalizeCurrency(currency)
  }).format(Number(value || 0));
}

function formatLongDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return new Intl.DateTimeFormat(getCurrentLanguage(), { day: "numeric", month: "long", year: "numeric" }).format(d);
}

function formatShortDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return new Intl.DateTimeFormat(getCurrentLanguage(), { day: "numeric", month: "long" }).format(d);
}

function nextId(items) {
  return items.length ? Math.max(...items.map(i => Number(i.id))) + 1 : 1;
}

function customerById(data, id) {
  return data.customers.find(c => String(c.id) === String(id));
}

function serviceById(data, id) {
  return data.services.find(s => String(s.id) === String(id));
}

function fullName(customer) {
  return [customer.firstName || "", customer.lastName || ""].join(" ").trim();
}

function customerNumber(customer) {
  const raw = customer?.customerNumber ?? customer?.customer_number ?? customer?.id ?? "";
  const value = String(raw).trim();
  if (!value) return "-";

  if (/^\d+$/.test(value)) {
    return `K${value.padStart(5, "0")}`;
  }

  return value.startsWith("K") ? value : `K${value}`;
}

function customerSearchText(customer) {
  return [
    fullName(customer),
    customer.firstName,
    customer.lastName,
    customer.phone,
    String(customer.phone || "").replace(/\D/g, ""),
    customer.email,
    customerNumber(customer)
  ].join(" ").toLowerCase();
}

function weekBounds(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const day = d.getDay() || 7;
  const start = new Date(d);
  start.setDate(d.getDate() - day + 1);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  return {
    start: formatDateInput(start),
    end: formatDateInput(end)
  };
}
function minutesFromTimeString(timeStr) {
  const [hours = "0", minutes = "0"] = String(timeStr || "00:00").split(":");
  return (Number(hours) * 60) + Number(minutes);
}

function timeStringFromMinutes(totalMinutes) {
  const safeMinutes = Math.max(0, Number(totalMinutes) || 0);
  const hours = Math.floor(safeMinutes / 60) % 24;
  const minutes = safeMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function getSettings() {
  return getData().settings || getDefaultSettings();
}

function appointmentTimeRange(appointment, breakMinutes = 0) {
  const startMinutes = minutesFromTimeString(appointment.time || appointment.appointment_time || "00:00");
  const duration = Number(appointment.duration || 0);
  const buffer = Math.max(0, Number(breakMinutes) || 0);
  return {
    startMinutes,
    endMinutes: startMinutes + duration + buffer
  };
}

function findAppointmentOverlap(payload, appointments, breakMinutes = 0, excludeId = null) {
  const newRange = appointmentTimeRange({
    time: payload.time,
    duration: payload.duration
  }, breakMinutes);

  return appointments
    .filter(app => app.date === payload.date)
    .filter(app => String(app.id) !== String(excludeId || ""))
    .find(app => {
      const existingRange = appointmentTimeRange(app, breakMinutes);
      return newRange.startMinutes < existingRange.endMinutes && newRange.endMinutes > existingRange.startMinutes;
    }) || null;
}

function findNextAvailableStartTime(payload, appointments, breakMinutes = 0, excludeId = null) {
  const durationWithBreak = Math.max(0, Number(payload.duration || 0)) + Math.max(0, Number(breakMinutes) || 0);
  const dayAppointments = appointments
    .filter(app => app.date === payload.date)
    .filter(app => String(app.id) !== String(excludeId || ""))
    .map(app => ({
      ...app,
      range: appointmentTimeRange(app, breakMinutes)
    }))
    .sort((a, b) => a.range.startMinutes - b.range.startMinutes);

  let candidateStart = minutesFromTimeString(payload.time || "00:00");

  for (const appointment of dayAppointments) {
    if (candidateStart + durationWithBreak <= appointment.range.startMinutes) {
      return candidateStart;
    }

    const overlaps = candidateStart < appointment.range.endMinutes && candidateStart + durationWithBreak > appointment.range.startMinutes;
    if (overlaps) {
      candidateStart = appointment.range.endMinutes;
    }
  }

  return candidateStart;
}

function buildOverlapMessage(payload, overlapApp, appointments, breakMinutes = 0, excludeId = null) {
  const data = getData();
  const customer = customerById(data, overlapApp.customerId);
  const service = serviceById(data, overlapApp.serviceId);
  const range = appointmentTimeRange(overlapApp, breakMinutes);
  const nextPossibleStart = findNextAvailableStartTime(payload, appointments, breakMinutes, excludeId);

  return [
    "Deze afspraak overlapt met een bestaande afspraak.",
    "",
    `${overlapApp.time} - ${timeStringFromMinutes(range.endMinutes)} · ${customer ? fullName(customer) : "Onbekende klant"}${service ? ` (${service.name})` : ""}`,
    "",
    `Eerstvolgend mogelijk tijdstip voor deze behandeling: ${timeStringFromMinutes(nextPossibleStart)}`,
    "",
    "Wil je deze afspraak toch opslaan?"
  ].join("\n");
}


function getAppointmentEndTime(appointment, breakMinutes = 0) {
  const range = appointmentTimeRange(appointment, breakMinutes);
  return timeStringFromMinutes(range.endMinutes);
}

function isAppointmentInPast(payload) {
  const appointmentDateTime = new Date(`${payload.date}T${payload.time || "00:00"}:00`);
  return appointmentDateTime.getTime() < Date.now();
}

function buildPastAppointmentMessage(payload) {
  return [
    "Deze afspraak valt in het verleden.",
    "",
    `${formatLongDate(payload.date)} om ${payload.time}`,
    "",
    "Wil je deze afspraak toch opslaan?"
  ].join("\n");
}

function jumpToToday() {
  if (state.selectedDate !== todayStr) {
    state.revenueSyncSelectedDateOnOpen = true;
  }
  state.selectedDate = todayStr;
  state.currentYear = today.getFullYear();
  state.currentMonth = today.getMonth();
  renderCalendar();
  renderAgendaList();
}


function setDialogMessage(container, message) {
  if (!container) return;
  container.textContent = message || "";
}

function openStyledDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "open");
  }
}

function closeStyledDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function showAppDialog({
  title = t("message"),
  message = "",
  confirmText = t("ok") || "OK",
  cancelText = t("cancel"),
  showCancel = false,
  variant = "info"
} = {}) {
  return new Promise(resolve => {
    const dialog = document.getElementById("appMessageDialog");
    const titleEl = document.getElementById("appMessageDialogTitle");
    const messageEl = document.getElementById("appMessageDialogText");
    const confirmBtn = document.getElementById("appMessageConfirmBtn");
    const cancelBtn = document.getElementById("appMessageCancelBtn");
    const card = dialog?.querySelector(".app-message-card");

    if (!dialog || !titleEl || !messageEl || !confirmBtn || !cancelBtn || !card) {
      if (showCancel) {
        resolve(window.confirm(message));
        return;
      }
      window.alert(message);
      resolve(true);
      return;
    }

    titleEl.textContent = title;
    setDialogMessage(messageEl, message);
    confirmBtn.textContent = confirmText;
    cancelBtn.textContent = cancelText;
    cancelBtn.classList.toggle("hidden", !showCancel);
    card.dataset.variant = variant;

    let settled = false;

    const cleanup = (result) => {
      if (settled) return;
      settled = true;
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onBackdropClick);
      confirmBtn.removeEventListener("click", onConfirm);
      cancelBtn.removeEventListener("click", onCancelClick);
      closeStyledDialog(dialog);
      resolve(result);
    };

    const onConfirm = () => cleanup(true);
    const onCancel = (event) => {
      event.preventDefault();
      cleanup(false);
    };
    const onCancelClick = () => cleanup(false);
    const onBackdropClick = (event) => {
      const rect = dialog.getBoundingClientRect();
      const clickedInside = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );
      if (!clickedInside && showCancel) cleanup(false);
    };

    applyNavStyleActionButtons(dialog);

    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onBackdropClick);
    confirmBtn.addEventListener("click", onConfirm);
    cancelBtn.addEventListener("click", onCancelClick);
    openStyledDialog(dialog);
    confirmBtn.focus();
  });
}

async function appAlert(message, options = {}) {
  await showAppDialog({
    title: options.title || t("message"),
    message,
    confirmText: options.confirmText || (t("ok") || "OK"),
    showCancel: false,
    variant: options.variant || "info"
  });
}

async function appConfirm(message, options = {}) {
  return showAppDialog({
    title: options.title || t("confirmTitle"),
    message,
    confirmText: options.confirmText || t("confirm"),
    cancelText: options.cancelText || t("cancel"),
    showCancel: true,
    variant: options.variant || "warning"
  });
}


/* =========================
   AUTH / SUPABASE HELPERS
========================= */

async function getCurrentUser() {
    const { data } = await supabaseClient.auth.getUser();
    return data?.user ?? null;
}


async function getCurrentProfile() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabaseClient
        .from("profiles")
        .select("first_name, last_name, salon_name, vat_number, language, currency, terms_accepted, terms_accepted_at")
        .eq("id", user.id)
        .maybeSingle();

    return profile ?? null;
}


function extractFirstNameFromUser(user, profile = null) {
  if (profile?.first_name?.trim()) return profile.first_name.trim();

  if (user?.user_metadata?.first_name?.trim()) {
    return user.user_metadata.first_name.trim();
  }

  if (user?.user_metadata?.full_name?.trim()) {
    return user.user_metadata.full_name.trim().split(/\s+/)[0];
  }

  const email = user?.email || "";
  if (email.includes("@")) return email.split("@")[0];

  return "log in";
}

function buildHeaderAccountIcon(profile = null) {
  return `
  <svg width="28" height="28" viewBox="0 0 7.4083331 7.4083333" version="1.1" id="svg-login" aria-hidden="true" focusable="false">
    <path id="path2" style="fill:currentColor;stroke-width:1" d="M 1.8124886,6.9333659 C 1.7864235,6.7804715 1.7675079,6.6355105 1.7704544,6.6112293 1.7743344,6.5791763 3.2588613,4.9500562 3.6672626,4.5296574 3.6940726,4.5020544 3.6817556,4.4755334 3.6188266,4.425408 3.5724096,4.388429 3.5335256,4.344646 3.5324256,4.328105 3.5313256,4.311564 3.5784656,4.24943 3.6371651,4.190023 L 3.743907,4.0820167 3.6711381,3.8171814 C 3.5432433,3.3517168 3.5840966,2.9635266 3.8048285,2.5468598 3.9526753,2.2677754 4.1120754,2.0888386 4.369907,1.9125214 4.6988872,1.6875506 5.174746,1.5806658 5.5623491,1.6446829 5.9455505,1.7079728 6.4213255,1.954885 6.385528,2.0718868 6.3560867,2.1681128 6.2487288,2.2797964 6.1129319,2.3554651 6.0094977,2.413101 5.9644173,2.4204328 5.9054735,2.3892065 5.808312,2.3377351 5.6135914,2.3202589 5.4920442,2.3521006 5.1460796,2.442733 4.9278982,2.9089857 5.0917653,3.2074952 5.2806656,3.5516062 5.6895166,3.6612769 5.9957466,3.4499807 6.0421964,3.4179296 6.1840751,3.3540262 6.3110328,3.3079697 6.4382469,3.2618206 6.6381177,3.1540276 6.7562874,3.0678378 L 6.9707089,2.9114445 6.9939334,3.0735519 C 7.0862544,3.7179479 6.8127652,4.3503043 6.2714299,4.7441086 5.914249,5.0039462 5.2762027,5.1209502 4.8933961,4.99681 4.722491,4.9413899 4.6931818,4.9477209 4.5685144,5.067006 4.4838016,5.1480612 4.4422798,5.1679996 4.4022548,5.1468401 4.3565878,5.1226989 4.3099551,5.1606477 4.078425,5.4103609 3.8295073,5.6788283 3.8015789,5.7004845 3.7281058,5.6820133 3.594652,5.6484652 3.4958483,5.6715865 3.4273062,5.7524076 c -0.057393,0.067676 -0.059392,0.091231 -0.016618,0.195882 0.042422,0.1037917 0.040434,0.1292321 -0.015596,0.1995756 -0.055858,0.070129 -0.084479,0.077642 -0.219925,0.057742 C 3.0361147,6.1851726 3.011994,6.192098 2.9496638,6.2703521 2.888426,6.3472338 2.8845914,6.3742424 2.9183956,6.4906524 2.9676806,6.6603784 2.9117465,6.7212636 2.712942,6.714319 l -0.1461225,-0.0051 0.02626,0.1371901 c 0.025352,0.132446 0.022775,0.1410274 -0.074519,0.2481344 -0.097084,0.1068766 -0.1110022,0.1110506 -0.3797304,0.1138782 l -0.2789518,0.00293 z M 0.09960021,5.0870474 0.11589215,4.7646101 1.3278707,3.9098107 c 0.666588,-0.4701393 1.218946,-0.8679514 1.2274616,-0.884026 0.00852,-0.016072 -0.00559,-0.05068 -0.031333,-0.076906 C 2.472748,2.8966862 2.5091547,2.8303121 2.6557246,2.7087317 2.7306989,2.6465361 2.7314386,2.6299145 2.6809931,2.1401865 2.6524125,1.862725 2.6407297,1.5926531 2.6550305,1.5400279 2.7663945,1.1302263 3.6377145,0.59092624 4.173342,0.60027388 c 0.1849952,0.003229 0.2622435,0.0686643 0.482957,0.40909022 0.1135274,0.175104 0.201693,0.3272804 0.1959249,0.3381686 -0.00577,0.010894 -0.057456,0.032381 -0.1148583,0.047752 C 4.4180462,1.4808097 3.9677633,1.7800491 3.7305645,2.0643631 3.4185721,2.4383276 3.2858035,3.0129759 3.3569496,3.6814435 3.3751936,3.852863 3.3694166,3.8865005 3.3144696,3.928804 3.2648716,3.966987 3.2398666,3.966848 3.200867,3.9281568 3.173367,3.9008678 3.135841,3.8677158 3.117484,3.8544798 3.097962,3.8403988 2.9354725,3.9319018 2.7259976,4.0749347 L 2.3678889,4.3194562 2.2230535,4.2720535 C 2.1027543,4.232676 2.0617043,4.2349153 1.9807172,4.2852716 l -0.097502,0.060623 0.022417,0.135099 c 0.021597,0.1301522 0.019205,0.1374826 -0.06535,0.2002618 -0.07645,0.05676 -0.1059088,0.058432 -0.2284586,0.012964 -0.12352,-0.045829 -0.1517074,-0.044023 -0.230969,0.014827 -0.086495,0.064221 -0.08997,0.073126 -0.082915,0.2125912 0.0089,0.1759408 -0.052824,0.2349933 -0.199976,0.1913195 -0.21334754,-0.063321 -0.20352337,-0.067493 -0.20591318,0.087464 l -0.00214,0.139313 -0.12557933,0.094597 C 0.63898081,5.5287487 0.63821642,5.528815 0.36102383,5.4692058 L 0.08330531,5.409483 Z M 5.3265891,3.0592103 C 5.3010296,3.0092112 5.3036646,2.958744 5.3348832,2.9004991 5.3922039,2.7935457 5.4165768,2.7813191 5.5913626,2.7718554 5.816862,2.7596463 6.1922715,2.6417936 6.3438787,2.5356152 6.5451665,2.3946435 6.7113544,2.1144278 6.743435,1.861909 6.7761353,1.6045091 6.6791806,1.2535598 6.5112082,1.0213137 6.3972027,0.86368469 6.3555062,0.82842208 6.1635999,0.72734506 5.8105691,0.54137617 5.5164609,0.55837155 5.1160516,0.78780471 4.8952048,0.91434919 4.8088969,0.92769622 4.7213306,0.84884547 4.5882933,0.72904661 4.6614868,0.58222964 4.9275521,0.43519154 5.5919044,0.06804531 6.2583927,0.15465655 6.7434354,0.67116792 7.0723054,1.0213743 7.2205795,1.5762025 7.1118315,2.0496729 7.0641943,2.2570766 6.9022819,2.5557179 6.756509,2.7050549 6.5001169,2.9677084 6.0480675,3.1526559 5.6291733,3.1662813 5.4129289,3.1733146 5.3787404,3.1612174 5.3265888,3.0592066 Z" />
  </svg>
  `;
}


function setAuthLocked(isLocked) {
  document.body.classList.toggle("auth-locked", Boolean(isLocked));

  document.querySelectorAll(".bottom-nav .nav-btn").forEach(button => {
    const isAccountButton = button.dataset.screen === "accountScreen";
    button.disabled = Boolean(isLocked && !isAccountButton);
    button.setAttribute("aria-disabled", String(Boolean(isLocked && !isAccountButton)));
    button.tabIndex = isLocked && !isAccountButton ? -1 : 0;
  });
}

function isAuthLocked() {
  return document.body.classList.contains("auth-locked");
}


function buildAccountAvatar(profile = null) {
  if (profile?.avatar_url) {
    return `<img src="${profile.avatar_url}" alt="Profielfoto" />`;
  }
  return `
  <svg
	width="28"
	height="28"
	viewBox="0 0 7.4083331 7.4083333"
	version="1.1"
	id="svg-login"
	<g>
		<path style="fill:#df9db3;fill-opacity:1;stroke-width:0" 
		d="M 0.02065483,7.2874174 C 0.03201486,7.2209141 0.0639516,7.0141483 0.0916248,6.8279378 0.21895894,5.9711217 0.37280855,5.6926829 0.89086309,5.3814668 1.05004,5.2858419 1.6348599,5.0375849 2.1757299,4.8360375 L 2.3600042,4.7673699 2.1596079,5.0209379 C 1.986093,5.2404912 1.6851358,5.7017814 1.6851358,5.7481817 c 0,0.00863 0.1250337,0.015698 0.2778528,0.015698 H 2.2408415 L 2.8530307,6.2532212 C 3.4230649,6.7088655 3.4699877,6.7395931 3.5344423,6.6994453 3.572515,6.6757307 3.8673267,6.455528 4.1895795,6.2101045 L 4.7754942,5.7638794 h 0.2766182 c 0.1521396,0 0.2766166,-0.00707 0.2766166,-0.015698 0,-0.046142 -0.3004675,-0.5070727 -0.4721889,-0.724357 L 4.658428,4.773145 5.0661282,4.925074 c 1.4784506,0.5509424 1.6869677,0.7647133 1.8561126,1.9028638 0.027673,0.1862105 0.05961,0.3929763 0.07097,0.4594796 L 7.013865,7.4083333 H 3.506933 0 Z M 2.9062392,5.7770326 C 2.5804514,5.5192332 2.3091449,5.2949832 2.3033355,5.2786978 2.2975266,5.2624127 2.3672545,5.1257806 2.4582872,4.9750705 2.6052344,4.731793 2.6226959,4.6838039 2.6139482,4.5472776 L 2.6040958,4.3935012 2.313898,4.3703343 C 1.9190568,4.3388129 1.7026179,4.2988831 1.4862662,4.2176449 1.2820603,4.1409668 0.99423866,3.9021911 1.0690015,3.8714841 1.1742715,3.8282454 1.3668014,3.6176736 1.4424658,3.4630209 1.5789141,3.1841313 1.6206478,2.8667813 1.6206478,2.1081004 c 0,-0.5052406 0.012687,-0.7323499 0.04862,-0.8703043 0.1442381,-0.5537686 0.4971434,-0.94225993 1.0324557,-1.13656738 0.4257712,-0.15454662 0.8256262,-0.13233376 1.2243837,0.0680206 0.1479511,0.074337 0.2709037,0.11335661 0.3568949,0.11326152 0.1686944,-1.2176e-4 0.4425545,0.0814004 0.5938668,0.17691926 0.2466422,0.15569834 0.4171024,0.44569742 0.5023768,0.8546797 0.03596,0.1724636 0.046482,0.4192716 0.041689,0.97791 -0.00533,0.6212567 0.00301,0.7825573 0.049466,0.9568124 0.067097,0.2516667 0.2364139,0.5209458 0.390194,0.6205583 0.061721,0.03998 0.1124,0.083788 0.1126194,0.097349 C 5.9738228,4.004197 5.7850672,4.1119303 5.5866834,4.1873546 5.3821139,4.2651294 5.0219102,4.328291 4.5951743,4.3612147 l -0.2982582,0.023011 v 0.1528807 c 0,0.1381665 0.020172,0.1796259 0.2095871,0.430743 C 4.6217766,5.1206739 4.7155066,5.2571026 4.7147935,5.271026 4.7137087,5.2917587 3.749698,6.0689008 3.5545424,6.2063455 3.5060758,6.2404797 3.4192546,6.1829855 2.9062397,5.7770334 Z"
		id="path-login" />
	</g>
  </svg>
  `;
}

async function uploadAvatar(userId, file) {
  if (!file) return null;

  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const filePath = `${userId}/${Date.now()}.${ext}`;

  const { error: uploadError } = await supabaseClient.storage
    .from("avatars")
    .upload(filePath, file, { upsert: true });

  if (uploadError) throw uploadError;

  const { data } = supabaseClient.storage
    .from("avatars")
    .getPublicUrl(filePath);

  return data?.publicUrl || null;
}

async function upsertProfile(userId, values) {
  const payload = {
    id: userId,
    first_name: values.first_name || "",
    last_name: values.last_name || "",
    salon_name: values.salon_name || null,
    vat_number: values.vat_number || null,
    language: normalizeLanguage(values.language || DEFAULT_LANGUAGE),
    currency: normalizeCurrency(values.currency || DEFAULT_CURRENCY),
    terms_accepted: Boolean(values.terms_accepted),
    terms_accepted_at: values.terms_accepted_at || null
  };

  const { error } = await supabaseClient
    .from("profiles")
    .upsert(payload, { onConflict: "id" });

  if (error) throw error;
}

async function syncAuthUI() {
	const { data: { user } } = await supabaseClient.auth.getUser();
	const profile = await getCurrentProfile();
  currentProfilePreferences = {
    language: normalizeLanguage(profile?.language || user?.user_metadata?.language || getData()?.settings?.language || DEFAULT_LANGUAGE),
    currency: normalizeCurrency(profile?.currency || user?.user_metadata?.currency || getData()?.settings?.currency || DEFAULT_CURRENCY)
  };
  updateStaticI18n();

  setAuthLocked(!user);

  const headerUserName = document.getElementById("headerUserName");
  const headerAccountIcon = document.querySelector("#headerAccountBtn .header-account-icon");

  const guestView = document.getElementById("accountGuestView");
  const loggedInView = document.getElementById("accountLoggedInView");

  const accountProfileName = document.getElementById("accountProfileName");
  const accountProfileEmail = document.getElementById("accountProfileEmail");
  const accountProfileFirstName = document.getElementById("accountProfileFirstName");
  const accountProfileLastName = document.getElementById("accountProfileLastName");
  const accountProfileSalonName = document.getElementById("accountProfileSalonName");
  const accountProfileVatNumber = document.getElementById("accountProfileVatNumber");
  const accountProfileLanguage = document.getElementById("accountProfileLanguage");
  const accountProfileCurrency = document.getElementById("accountProfileCurrency");

  if (headerUserName) {
    headerUserName.textContent = user ? extractFirstNameFromUser(user, profile) : "log in";
  }

  if (headerAccountIcon) {
    headerAccountIcon.innerHTML = buildHeaderAccountIcon(profile);
  }

  if (!user) {
    if (guestView) guestView.classList.remove("hidden");
    if (loggedInView) loggedInView.classList.add("hidden");
    return;
  }

  const firstName =
    profile?.first_name?.trim() ||
    user.user_metadata?.first_name?.trim() ||
    extractFirstNameFromUser(user, profile);

  const lastName =
    profile?.last_name?.trim() ||
    user.user_metadata?.last_name?.trim() ||
    "-";

  const profileName = [firstName, lastName].filter(Boolean).join(" ").trim() || user.email || "-";

  if (accountProfileName) accountProfileName.textContent = profileName;
  if (accountProfileEmail) accountProfileEmail.textContent = user.email || "-";
  if (accountProfileFirstName) accountProfileFirstName.textContent = firstName || "-";
  if (accountProfileLastName) accountProfileLastName.textContent = lastName || "-";
  if (accountProfileSalonName) accountProfileSalonName.textContent = profile?.salon_name?.trim() || "-";
  if (accountProfileVatNumber) accountProfileVatNumber.textContent = profile?.vat_number?.trim() || "-";
  if (accountProfileLanguage) accountProfileLanguage.textContent = SUPPORTED_LANGUAGES.find(item => item.code === getCurrentLanguage())?.label || "-";
  if (accountProfileCurrency) accountProfileCurrency.textContent = getCurrencyLabel(getCurrentCurrency());

  if (guestView) guestView.classList.add("hidden");
  if (loggedInView) loggedInView.classList.remove("hidden");
}


let authRefreshScheduled = false;

async function ensureActiveAuthSession({ email = "", password = "" } = {}) {
  const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
  if (sessionError) {
    console.error("Fout bij ophalen sessie:", sessionError.message);
  }

  if (sessionData?.session?.access_token) {
    return sessionData.session;
  }

  const safeEmail = String(email || "").trim();
  const safePassword = String(password || "");

  if (safeEmail && safePassword) {
    const { data: signInData, error: signInError } = await supabaseClient.auth.signInWithPassword({
      email: safeEmail,
      password: safePassword
    });

    if (signInError) {
      throw new Error("Je huidige wachtwoord kon niet geverifieerd worden. Meld je opnieuw aan en probeer daarna opnieuw.");
    }

    if (signInData?.session?.access_token) {
      return signInData.session;
    }
  }

  const { data: refreshData, error: refreshError } = await supabaseClient.auth.refreshSession();
  if (refreshError) {
    console.error("Fout bij verversen sessie:", refreshError.message);
  }

  if (refreshData?.session?.access_token) {
    return refreshData.session;
  }

  throw new Error("Auth session missing!");
}

async function verifyCurrentPassword(userEmail, password) {
  const safeEmail = String(userEmail || "").trim();
  const safePassword = String(password || "");
  if (!safeEmail || !safePassword) {
    throw new Error("Vul je huidige wachtwoord in.");
  }

  const tempClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
      storageKey: `nailbooker-temp-auth-${Date.now()}`
    }
  });

  const { error } = await tempClient.auth.signInWithPassword({
    email: safeEmail,
    password: safePassword
  });

  try {
    await tempClient.auth.signOut();
  } catch (signOutError) {
    console.warn("Tijdelijke reauth signOut mislukt:", signOutError?.message || signOutError);
  }

  if (error) {
    throw new Error("Het huidige wachtwoord is onjuist.");
  }
}

async function refreshAuthState() {
  try {
    await ensureActiveAuthSession();
  } catch (error) {
    console.warn("Geen actieve sessie tijdens refreshAuthState:", error?.message || error);
  }

  await syncAuthUI();
}

function scheduleAuthUiRefresh() {
  if (authRefreshScheduled) return;
  authRefreshScheduled = true;

  window.setTimeout(async () => {
    authRefreshScheduled = false;
    try {
      await syncAuthUI();
      const user = await getCurrentUser();
      if (user) {
        await loadAllDataFromSupabase();
      }
      rerenderAll();
    } catch (error) {
      console.error("Fout bij auth UI refresh:", error?.message || error);
    }
  }, 0);
}

async function openEditProfileDialog() {
  const { data: userData } = await supabaseClient.auth.getUser();
  const user = userData?.user;
  if (!user) {
    await appAlert("Log eerst in om je profiel te wijzigen.", { title: "Profiel", variant: "warning" });
    return;
  }

  const profile = await getCurrentProfile();
  document.getElementById("editFirstName").value = profile?.first_name || user.user_metadata?.first_name || "";
  document.getElementById("editLastName").value = profile?.last_name || user.user_metadata?.last_name || "";
  document.getElementById("editSalonName").value = profile?.salon_name || "";
  document.getElementById("editVatNumber").value = profile?.vat_number || "";
  const editLanguage = document.getElementById("editLanguage");
  const editCurrency = document.getElementById("editCurrency");
  if (editLanguage) editLanguage.innerHTML = buildLanguageOptions(profile?.language || getCurrentLanguage());
  if (editCurrency) editCurrency.innerHTML = buildCurrencyOptions(profile?.currency || getCurrentCurrency());
  document.getElementById("editProfileDialog").showModal();
}

async function saveProfileFromForm(event) {
  event.preventDefault();

  const firstName = document.getElementById("editFirstName")?.value.trim();
  const lastName = document.getElementById("editLastName")?.value.trim();
  const salonName = document.getElementById("editSalonName")?.value.trim() || "";
  const vatNumber = document.getElementById("editVatNumber")?.value.trim() || "";
  const language = normalizeLanguage(document.getElementById("editLanguage")?.value || getCurrentLanguage());
  const currency = normalizeCurrency(document.getElementById("editCurrency")?.value || getCurrentCurrency());

  if (!firstName || !lastName) {
    await appAlert("Vul voornaam en naam in.", { title: "Profiel", variant: "warning" });
    return;
  }

  const { data: userData } = await supabaseClient.auth.getUser();
  const user = userData?.user;
  if (!user) {
    await appAlert("Je bent niet ingelogd.", { title: "Profiel", variant: "warning" });
    return;
  }

  try {
    await ensureActiveAuthSession();

    const { error: updateUserError } = await supabaseClient.auth.updateUser({
      data: {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`.trim(),
        salon_name: salonName,
        vat_number: vatNumber,
        language,
        currency,
        terms_accepted: true
      }
    });

    if (updateUserError) {
      throw new Error(updateUserError.message || "Profiel wijzigen mislukt.");
    }

    await upsertProfile(user.id, {
      first_name: firstName,
      last_name: lastName,
      salon_name: salonName,
      vat_number: vatNumber,
      language,
      currency,
      terms_accepted: true,
      terms_accepted_at: (await getCurrentProfile())?.terms_accepted_at || new Date().toISOString()
    });

    closeDialog("editProfileDialog");
    await refreshAuthState();
    await loadAllDataFromSupabase();
    rerenderAll();
    await appAlert("Je profiel werd aangepast.", { title: "Profiel opgeslagen", variant: "success" });
  } catch (error) {
    console.error("saveProfileFromForm error:", error);
    await appAlert(`Opslaan mislukt. ${error.message || error}`, { title: "Opslaan mislukt", variant: "danger" });
  }
}


function setupPasswordToggleButtons() {
  document.querySelectorAll('[data-password-toggle]').forEach(button => {
    if (button.dataset.passwordToggleReady === 'true') return;
    button.dataset.passwordToggleReady = 'true';

    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      const targetId = button.getAttribute('data-password-toggle');
      const input = targetId ? document.getElementById(targetId) : null;
      if (!input) return;

      const isVisible = input.type === 'text';
      const selectionStart = typeof input.selectionStart === 'number' ? input.selectionStart : null;
      const selectionEnd = typeof input.selectionEnd === 'number' ? input.selectionEnd : null;

      input.setAttribute('type', isVisible ? 'password' : 'text');
      button.setAttribute('aria-pressed', isVisible ? 'false' : 'true');
      button.setAttribute('aria-label', isVisible ? 'Toon wachtwoord' : 'Verberg wachtwoord');

      window.requestAnimationFrame(() => {
        try {
          input.focus({ preventScroll: true });
        } catch (error) {
          input.focus();
        }
        if (selectionStart !== null && selectionEnd !== null) {
          try {
            input.setSelectionRange(selectionStart, selectionEnd);
          } catch (error) {}
        }
      });
    });
  });
}

function openPasswordDialog() {
  const form = document.getElementById("passwordForm");
  if (form) form.reset();
  document.getElementById("passwordDialog").showModal();
  setupPasswordToggleButtons();
}

async function savePasswordFromForm(event) {
  event.preventDefault();

  const currentPassword = document.getElementById("currentPassword")?.value || "";
  const newPassword = document.getElementById("newPassword")?.value || "";
  const confirmPassword = document.getElementById("confirmPassword")?.value || "";
  const submitBtn = document.querySelector('#passwordForm button[type="submit"]');

  if (!currentPassword) {
    await appAlert("Vul je huidige wachtwoord in.", { title: "Wachtwoord wijzigen", variant: "warning" });
    return;
  }

  if (!newPassword || newPassword.length < 6) {
    await appAlert("Je nieuwe wachtwoord moet minstens 6 tekens bevatten.", { title: "Wachtwoord wijzigen", variant: "warning" });
    return;
  }

  if (newPassword !== confirmPassword) {
    await appAlert("De nieuwe wachtwoorden komen niet overeen.", { title: "Wachtwoord wijzigen", variant: "warning" });
    return;
  }

  const { data: userData } = await supabaseClient.auth.getUser();
  const user = userData?.user;
  if (!user?.email) {
    await appAlert("Je bent niet ingelogd.", { title: "Wachtwoord wijzigen", variant: "warning" });
    return;
  }

  if (submitBtn) submitBtn.disabled = true;

  const tempClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
      storageKey: `nailbooker-password-change-${Date.now()}`
    }
  });

  try {
    const { error: signInError } = await tempClient.auth.signInWithPassword({
      email: user.email,
      password: currentPassword
    });

    if (signInError) {
      throw new Error("Het huidige wachtwoord is onjuist.");
    }

    const { error: updatePasswordError } = await tempClient.auth.updateUser({
      password: newPassword
    });

    if (updatePasswordError) {
      throw new Error(`Wachtwoord wijzigen mislukt: ${updatePasswordError.message || updatePasswordError}`);
    }

    try {
      await supabaseClient.auth.signOut();
    } catch (signOutError) {
      console.warn("Hoofdclient signOut na wachtwoordwijziging mislukt:", signOutError?.message || signOutError);
    }

    const { error: signInWithNewPasswordError } = await supabaseClient.auth.signInWithPassword({
      email: user.email,
      password: newPassword
    });

    if (signInWithNewPasswordError) {
      throw new Error("Wachtwoord aangepast, maar opnieuw aanmelden mislukte. Log één keer opnieuw in met je nieuwe wachtwoord.");
    }

    closeDialog("passwordDialog");
    await refreshAuthState();
    await loadAllDataFromSupabase();
    rerenderAll();
    await appAlert("Je wachtwoord werd gewijzigd.", { title: "Wachtwoord gewijzigd", variant: "success" });
  } catch (error) {
    console.error("savePasswordFromForm error:", error);
    await appAlert(`Opslaan mislukt. ${error.message || error}`, { title: "Opslaan mislukt", variant: "danger" });
  } finally {
    try {
      await tempClient.auth.signOut();
    } catch (tempSignOutError) {
      console.warn("Tijdelijke client signOut mislukt:", tempSignOutError?.message || tempSignOutError);
    }

    if (submitBtn) submitBtn.disabled = false;
  }
}

async function registerAccount(event) {
  if (event) event.preventDefault();

  const firstName = document.getElementById("registerFirstName").value.trim();
  const lastName = document.getElementById("registerLastName").value.trim();
  const salonName = document.getElementById("registerSalonName")?.value.trim() || "";
  const vatNumber = document.getElementById("registerVatNumber")?.value.trim() || "";
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const passwordConfirm = document.getElementById("registerPasswordConfirm").value;
  const language = normalizeLanguage(document.getElementById("registerLanguage")?.value || DEFAULT_LANGUAGE);
  const currency = normalizeCurrency(document.getElementById("registerCurrency")?.value || DEFAULT_CURRENCY);
  const termsAccepted = Boolean(document.getElementById("registerTermsAccepted")?.checked);

  if (!firstName || !lastName || !email || !password || !passwordConfirm) {
    await appAlert("Vul voornaam, naam, e-mail, wachtwoord en bevestiging in.");
    return;
  }

  if (!termsAccepted) {
    await appAlert("Je moet akkoord gaan met de gebruiksvoorwaarden om te registreren.");
    return;
  }

  if (password !== passwordConfirm) {
    await appAlert("De wachtwoorden komen niet overeen.");
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`.trim(),
        salon_name: salonName,
        vat_number: vatNumber,
        language,
        currency,
        terms_accepted: true
      }
    }
  });

  if (error) {
    await appAlert("Registratie mislukt: " + error.message, { title: "Registratie mislukt", variant: "danger" });
    return;
  }

  try {
    if (data.user && data.session) {
      await upsertProfile(data.user.id, {
        first_name: firstName,
        last_name: lastName,
        salon_name: salonName,
        vat_number: vatNumber,
        language,
        currency,
        terms_accepted: true,
        terms_accepted_at: new Date().toISOString()
      });
    }
  } catch (profileError) {
    console.error("Profiel opslaan mislukt:", profileError.message);
    await appAlert("Je account is aangemaakt, maar de profielgegevens konden niet volledig opgeslagen worden.", { title: "Registratie voltooid", variant: "warning" });
  }

  document.getElementById("registerForm").reset();
  closeDialog("registerDialog");

  await refreshAuthState();

  if (data.session) {
    await loadAllDataFromSupabase();
    rerenderAll();
    await syncAuthUI();
    switchScreen("agendaScreen", t("agenda"));
    await appAlert("Registratie gelukt. Je bent nu ingelogd.", { title: "Registratie gelukt", variant: "success" });
  } else {
    await syncAuthUI();
    switchScreen("accountScreen", t("account"));
    await appAlert("Registratie gelukt. Controleer eventueel je mailbox en log daarna in.", { title: "Registratie gelukt", variant: "success" });
  }
}

async function loginAccount() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    await appAlert("Inloggen mislukt: " + error.message, { title: "Inloggen mislukt", variant: "danger" });
    return;
  }

  document.getElementById("loginPassword").value = "";

  await refreshAuthState();
  await loadAllDataFromSupabase();
  rerenderAll();
  await syncAuthUI();
  switchScreen("agendaScreen", t("agenda"));
}

async function logoutAccount() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    await appAlert("Uitloggen mislukt: " + error.message, { title: "Uitloggen mislukt", variant: "danger" });
    return;
  }

  authUserCache = null;
  authProfileCache = null;
  authInitialized = true;

  localStorage.removeItem(STORAGE_KEY);
  seedData();
  rerenderAll();
  await syncAuthUI();
  switchScreen("accountScreen", t("account"));
}

/* =========================
   UI
========================= */


function getScreenTitle(screenId, fallback = "") {
  const map = {
    agendaScreen: "agenda",
    revenueScreen: "revenue",
    clientsScreen: "clients",
    servicesScreen: "services",
    paymentMethodsScreen: "paymentMethods",
    statisticsScreen: "statistics",
    settingsScreen: "settings",
    accountScreen: "account"
  };
  const key = map[screenId];
  return key ? t(key) : fallback;
}

function updateTopbar(screenId, title) {
  document.getElementById("screenTitle").textContent = getScreenTitle(screenId, title);

  const backBtn = document.getElementById("backBtn");
  const fab = document.getElementById("floatingAddBtn");

  backBtn.classList.toggle("hidden-btn", screenId !== "clientDetailScreen");

  if (screenId === "agendaScreen") {
    fab.onclick = () => openNewAppointmentDialog();
    fab.style.display = "block";
  } else if (screenId === "clientsScreen") {
    fab.onclick = openNewClientDialog;
    fab.style.display = "block";
  } else if (screenId === "servicesScreen") {
    fab.onclick = openNewServiceDialog;
    fab.style.display = "block";
  } else if (screenId === "paymentMethodsScreen") {
    fab.onclick = openNewPaymentMethodDialog;
    fab.style.display = "block";
  } else {
    fab.style.display = "none";
  }
}

function switchScreen(screenId, title) {
  if (isAuthLocked() && screenId !== "accountScreen") {
    screenId = "accountScreen";
    title = "Account";
  }

  state.currentScreen = screenId;

  if (["agendaScreen", "clientsScreen", "servicesScreen", "paymentMethodsScreen", "statisticsScreen", "revenueScreen", "settingsScreen", "accountScreen"].includes(screenId)) {
    state.previousMainScreen = screenId;
  }

  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));

  const target = document.getElementById(screenId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.screen === screenId);
  });
  ensureActiveNavVisible();

  updateTopbar(screenId, title);

  if (screenId === "revenueScreen") {
    const selectedDate = state.selectedDate || todayStr;
    if (!state.revenueInitialized || state.revenueSyncSelectedDateOnOpen || state.revenueSelectedDateSynced !== selectedDate) {
      setRevenuePeriod("day", selectedDate);
      state.revenueInitialized = true;
      state.revenueSelectedDateSynced = selectedDate;
      state.revenueSyncSelectedDateOnOpen = false;
    } else {
      renderRevenue();
    }
  }

  if (screenId === "statisticsScreen") {
    if (!Number.isFinite(Number(state.statsTopCustomersVisible)) || Number(state.statsTopCustomersVisible) < 10) {
      state.statsTopCustomersVisible = 10;
    }
    renderStatistics();
  }

  if (screenId === "accountScreen") {
    syncAuthUI();
  }

  if (screenId === "settingsScreen") {
    renderSettings();
  }

  if (screenId === "paymentMethodsScreen") {
    renderPaymentMethods();
  }

  const activeClient = state.selectedClientId ? customerById(getData(), state.selectedClientId) : null;
  updateClientActionBar(activeClient);
  updateRevenueActionBar();
}

function panelIsCalendarSwiping() {
  const panel = document.querySelector(".calendar-panel");
  return panel?.dataset?.swipeAnimating === "true" || panel?.classList?.contains("is-swipe-animating");
}

function renderCalendar() {
  const data = getData();
  const grid = document.getElementById("calendarGrid");

  grid.innerHTML = "";
  document.getElementById("monthPickerBtn").textContent = `${getMonthNameUpper(state.currentMonth)} ${state.currentYear}`;

  const first = new Date(state.currentYear, state.currentMonth, 1);
  const last = new Date(state.currentYear, state.currentMonth + 1, 0);

  let weekday = first.getDay();
  weekday = weekday === 0 ? 7 : weekday;

  for (let i = 1; i < weekday; i++) {
    const empty = document.createElement("div");
    empty.className = "empty-cell";
    grid.appendChild(empty);
  }

  for (let day = 1; day <= last.getDate(); day++) {
    const dateStr = `${state.currentYear}-${String(state.currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const appts = data.appointments.filter(a => a.date === dateStr);

    const cell = document.createElement("div");
    const isSelected = dateStr === state.selectedDate;
    const isToday = dateStr === todayStr;
    cell.className = `day-cell${isSelected ? " selected" : ""}${isToday ? " today" : ""}`;
    cell.innerHTML = `<button class="day-button" aria-label="${dateStr}"></button><span class="day-number">${day}</span>`;

    if (appts.length) {
      const dots = document.createElement("div");
      dots.className = "day-dots";

      const maxVisibleDots = window.matchMedia("(max-width: 420px)").matches ? 3 : 4;
      const visibleDots = Math.min(appts.length, maxVisibleDots);

      Array.from({ length: visibleDots }).forEach(() => {
        const i = document.createElement("i");
        dots.appendChild(i);
      });

      if (appts.length > visibleDots) {
        const more = document.createElement("span");
        more.className = "day-dots-more";
        more.textContent = "+";
        dots.appendChild(more);
      }

      cell.appendChild(dots);
    }

    let dayTapStartX = 0;
    let dayTapStartY = 0;
    let dayTapMoved = false;
    const dayTapMoveTolerance = 12;

    const selectCalendarDate = (event = null) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (state.selectedDate !== dateStr) {
        state.revenueSyncSelectedDateOnOpen = true;
      }
      state.selectedDate = dateStr;
      renderCalendar();
      renderAgendaList();
    };

    const rememberDayTapStart = (x, y) => {
      dayTapStartX = x;
      dayTapStartY = y;
      dayTapMoved = false;
    };

    const updateDayTapMove = (x, y) => {
      if (Math.abs(x - dayTapStartX) > dayTapMoveTolerance || Math.abs(y - dayTapStartY) > dayTapMoveTolerance) {
        dayTapMoved = true;
      }
    };

    if (window.PointerEvent) {
      cell.addEventListener("pointerdown", event => rememberDayTapStart(event.clientX, event.clientY));
      cell.addEventListener("pointermove", event => updateDayTapMove(event.clientX, event.clientY));
      cell.addEventListener("pointerup", event => {
        if (dayTapMoved || panelIsCalendarSwiping()) return;
        selectCalendarDate(event);
      });
    } else {
      cell.addEventListener("touchstart", event => {
        if (event.touches.length !== 1) return;
        rememberDayTapStart(event.touches[0].clientX, event.touches[0].clientY);
      }, { passive: true });
      cell.addEventListener("touchmove", event => {
        if (event.touches.length !== 1) return;
        updateDayTapMove(event.touches[0].clientX, event.touches[0].clientY);
      }, { passive: true });
      cell.addEventListener("touchend", event => {
        if (dayTapMoved || panelIsCalendarSwiping()) return;
        selectCalendarDate(event);
      }, { passive: false });
    }

    cell.addEventListener("click", event => {
      if (dayTapMoved || panelIsCalendarSwiping()) return;
      selectCalendarDate(event);
    });

    grid.appendChild(cell);
  }
}


function shiftedCalendarMonth(year, month, step) {
  const d = new Date(year, month + step, 1);
  return { year: d.getFullYear(), month: d.getMonth() };
}

function setCalendarMonth(step) {
  const next = shiftedCalendarMonth(state.currentYear, state.currentMonth, step);

  // Alleen de zichtbare kalendermaand wijzigen.
  // De geselecteerde datum en de afsprakenlijst onder de kalender blijven behouden
  // tot de gebruiker bewust een dag kiest of op het vandaag-icoontje klikt.
  state.currentYear = next.year;
  state.currentMonth = next.month;

  renderCalendar();
}

function fillCalendarPreview(preview, year, month) {
  const data = getData();
  const panel = document.querySelector(".calendar-panel");
  if (!preview || !panel) return;

  preview.innerHTML = panel.innerHTML;
  preview.querySelectorAll("[id]").forEach(el => el.removeAttribute("id"));
  preview.querySelectorAll("button").forEach(button => {
    button.setAttribute("tabindex", "-1");
    button.setAttribute("aria-hidden", "true");
  });

  const title = preview.querySelector(".month-select-btn");
  const grid = preview.querySelector(".calendar-grid");
  if (!title || !grid) return;

  title.textContent = `${getMonthNameUpper(month)} ${year}`;
  grid.innerHTML = "";

  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  let weekday = first.getDay();
  weekday = weekday === 0 ? 7 : weekday;

  for (let i = 1; i < weekday; i++) {
    const empty = document.createElement("div");
    empty.className = "empty-cell";
    grid.appendChild(empty);
  }

  for (let day = 1; day <= last.getDate(); day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const appts = data.appointments.filter(a => a.date === dateStr);
    const cell = document.createElement("div");
    const isToday = dateStr === todayStr;
    cell.className = `day-cell${isToday ? " today" : ""}`;
    cell.innerHTML = `<button class="day-button" aria-label="${dateStr}" tabindex="-1" aria-hidden="true"></button><span class="day-number">${day}</span>`;

    if (appts.length) {
      const dots = document.createElement("div");
      dots.className = "day-dots";
      const maxVisibleDots = window.matchMedia("(max-width: 420px)").matches ? 3 : 4;
      const visibleDots = Math.min(appts.length, maxVisibleDots);
      Array.from({ length: visibleDots }).forEach(() => {
        const i = document.createElement("i");
        dots.appendChild(i);
      });
      if (appts.length > visibleDots) {
        const more = document.createElement("span");
        more.className = "day-dots-more";
        more.textContent = "+";
        dots.appendChild(more);
      }
      cell.appendChild(dots);
    }

    grid.appendChild(cell);
  }
}

function animateCalendarMonth(step) {
  const panel = document.querySelector(".calendar-panel");
  if (!panel || panel.dataset.swipeAnimating === "true") {
    setCalendarMonth(step);
    return;
  }

  const target = shiftedCalendarMonth(state.currentYear, state.currentMonth, step);
  const width = panel.clientWidth || window.innerWidth || 360;
  const preview = document.createElement("div");
  preview.className = "calendar-swipe-preview";
  fillCalendarPreview(preview, target.year, target.month);
  panel.appendChild(preview);

  panel.dataset.swipeAnimating = "true";
  panel.classList.add("is-swiping");
  panel.style.setProperty("--calendar-current-x", "0px");
  panel.style.setProperty("--calendar-preview-x", `${step > 0 ? width : -width}px`);
  panel.style.setProperty("--calendar-swipe-opacity", "0.65");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      panel.classList.remove("is-swiping");
      panel.classList.add("is-swipe-animating");
      panel.style.setProperty("--calendar-current-x", `${step > 0 ? -width : width}px`);
      panel.style.setProperty("--calendar-preview-x", "0px");
      panel.style.setProperty("--calendar-swipe-opacity", "1");
    });
  });

  const finish = () => {
    panel.removeEventListener("transitionend", onTransitionEnd);
    setCalendarMonth(step);
    preview.remove();
    panel.classList.remove("is-swiping", "is-swipe-animating");
    panel.style.removeProperty("--calendar-current-x");
    panel.style.removeProperty("--calendar-preview-x");
    panel.style.removeProperty("--calendar-swipe-opacity");
    delete panel.dataset.swipeAnimating;
  };

  const onTransitionEnd = event => {
    if (event.target.closest(".calendar-panel") !== panel) return;
    if (event.propertyName !== "transform") return;
    finish();
  };

  panel.addEventListener("transitionend", onTransitionEnd);
  window.setTimeout(() => {
    if (panel.dataset.swipeAnimating === "true") finish();
  }, 360);
}

function setupCalendarSwipeNavigation() {
  const panel = document.querySelector(".calendar-panel");
  if (!panel || panel.dataset.calendarSwipeReady === "true") return;
  panel.dataset.calendarSwipeReady = "true";

  let startX = 0;
  let startY = 0;
  let lastX = 0;
  let tracking = false;
  let horizontal = false;
  let suppressNextClick = false;
  let suppressClickTimer = null;
  let dragPreview = null;
  let dragStep = 0;
  const threshold = 44;
  const intentThreshold = 10;

  const clearDragStyles = () => {
    if (dragPreview) {
      dragPreview.remove();
      dragPreview = null;
    }
    dragStep = 0;
    panel.classList.remove("is-swiping", "is-swipe-animating");
    panel.style.removeProperty("--calendar-current-x");
    panel.style.removeProperty("--calendar-preview-x");
    panel.style.removeProperty("--calendar-swipe-opacity");
    delete panel.dataset.swipeAnimating;
  };

  const reset = () => {
    tracking = false;
    horizontal = false;
    startX = 0;
    startY = 0;
    lastX = 0;
  };

  const prepareDragPreview = dx => {
    const step = dx < 0 ? 1 : -1;
    if (dragPreview && dragStep === step) return true;

    if (dragPreview) dragPreview.remove();
    dragStep = step;

    const target = shiftedCalendarMonth(state.currentYear, state.currentMonth, step);
    dragPreview = document.createElement("div");
    dragPreview.className = "calendar-swipe-preview";
    fillCalendarPreview(dragPreview, target.year, target.month);
    panel.appendChild(dragPreview);
    panel.dataset.swipeAnimating = "true";
    panel.classList.remove("is-swipe-animating");
    panel.classList.add("is-swiping");
    return true;
  };

  const updateDragPosition = dx => {
    if (!prepareDragPreview(dx)) return false;
    const width = panel.clientWidth || window.innerWidth || 360;
    const limitedDx = Math.max(-width, Math.min(width, dx));
    const previewStart = dragStep > 0 ? width : -width;
    const progress = Math.min(1, Math.abs(limitedDx) / Math.max(width, 1));

    panel.style.setProperty("--calendar-current-x", `${limitedDx}px`);
    panel.style.setProperty("--calendar-preview-x", `${previewStart + limitedDx}px`);
    panel.style.setProperty("--calendar-swipe-opacity", String(0.35 + (progress * 0.65)));
    return true;
  };

  const finishInteractiveSwipe = commit => {
    const step = dragStep;
    const width = panel.clientWidth || window.innerWidth || 360;

    if (!dragPreview || !step) {
      clearDragStyles();
      return;
    }

    panel.classList.remove("is-swiping");
    panel.classList.add("is-swipe-animating");

    if (commit) {
      panel.style.setProperty("--calendar-current-x", `${step > 0 ? -width : width}px`);
      panel.style.setProperty("--calendar-preview-x", "0px");
      panel.style.setProperty("--calendar-swipe-opacity", "1");
    } else {
      panel.style.setProperty("--calendar-current-x", "0px");
      panel.style.setProperty("--calendar-preview-x", `${step > 0 ? width : -width}px`);
      panel.style.setProperty("--calendar-swipe-opacity", "0.35");
    }

    const finish = () => {
      panel.removeEventListener("transitionend", onTransitionEnd);
      if (commit) setCalendarMonth(step);
      clearDragStyles();
    };

    const onTransitionEnd = event => {
      if (event.target.closest(".calendar-panel") !== panel) return;
      if (event.propertyName !== "transform") return;
      finish();
    };

    panel.addEventListener("transitionend", onTransitionEnd);
    window.setTimeout(() => {
      if (panel.dataset.swipeAnimating === "true") finish();
    }, 360);
  };

  panel.addEventListener("touchstart", event => {
    if (event.touches.length !== 1) return;

    const interactive = event.target.closest("input, select, textarea, dialog");
    const headerButton = event.target.closest(".month-header button");
    if (interactive || headerButton || panel.dataset.swipeAnimating === "true") return;

    tracking = true;
    horizontal = false;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    lastX = startX;
  }, { passive: true });

  panel.addEventListener("touchmove", event => {
    if (!tracking || event.touches.length !== 1) return;

    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    const dx = x - startX;
    const dy = y - startY;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (!horizontal) {
      if (absX < intentThreshold && absY < intentThreshold) return;

      if (absY > absX) {
        reset();
        clearDragStyles();
        return;
      }

      horizontal = true;
    }

    if (!updateDragPosition(dx)) return;
    event.preventDefault();
    lastX = x;
  }, { passive: false });

  panel.addEventListener("touchend", () => {
    if (!tracking || !horizontal) {
      reset();
      clearDragStyles();
      return;
    }

    const dx = lastX - startX;
    const commit = Math.abs(dx) >= threshold;
    reset();

    suppressNextClick = commit;
    finishInteractiveSwipe(commit);
  }, { passive: true });

  panel.addEventListener("touchcancel", () => {
    reset();
    finishInteractiveSwipe(false);
  }, { passive: true });

  panel.addEventListener("click", event => {
    if (!suppressNextClick) return;

    if (event.target.closest(".month-header button")) {
      suppressNextClick = false;
      return;
    }

    suppressNextClick = false;
    event.preventDefault();
    event.stopPropagation();
  }, true);
}


function getMainSwipeScreens() {
  return Array.from(document.querySelectorAll(".bottom-nav .nav-btn"))
    .map(btn => ({
      screenId: btn.dataset.screen,
      title: btn.dataset.title || btn.textContent.trim()
    }))
    .filter(item => item.screenId && document.getElementById(item.screenId))
    .filter(item => !isAuthLocked() || item.screenId === "accountScreen");
}

function ensureActiveNavVisible() {
  const nav = document.querySelector(".bottom-nav");
  const activeBtn = nav?.querySelector(".nav-btn.active");
  if (!nav || !activeBtn || typeof activeBtn.scrollIntoView !== "function") return;

  window.requestAnimationFrame(() => {
    try {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    } catch (error) {
      const navRect = nav.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      if (btnRect.left < navRect.left) {
        nav.scrollLeft -= (navRect.left - btnRect.left) + 10;
      } else if (btnRect.right > navRect.right) {
        nav.scrollLeft += (btnRect.right - navRect.right) + 10;
      }
    }
  });
}

function animateAppScreen(step) {
  const layout = document.querySelector(".main-layout");
  if (!layout || layout.dataset.pageSwipeAnimating === "true") return false;

  const screens = getMainSwipeScreens();
  const currentIndex = screens.findIndex(item => item.screenId === state.currentScreen);
  const targetIndex = currentIndex + step;

  if (currentIndex < 0 || targetIndex < 0 || targetIndex >= screens.length) {
    return false;
  }

  const currentScreen = document.getElementById(screens[currentIndex].screenId);
  const targetScreen = document.getElementById(screens[targetIndex].screenId);
  if (!currentScreen || !targetScreen || currentScreen === targetScreen) return false;

  const width = layout.clientWidth || window.innerWidth || 360;
  const target = screens[targetIndex];

  layout.dataset.pageSwipeAnimating = "true";
  targetScreen.classList.add("swipe-preview");
  layout.classList.add("is-swiping");
  layout.style.setProperty("--swipe-x", "0px");
  layout.style.setProperty("--swipe-preview-x", `${step > 0 ? width : -width}px`);
  layout.style.setProperty("--swipe-opacity", "0.72");

  const cleanup = () => {
    layout.removeEventListener("transitionend", onTransitionEnd);
    targetScreen.classList.remove("swipe-preview");
    layout.classList.remove("is-swiping", "is-swipe-animating");
    layout.style.removeProperty("--swipe-x");
    layout.style.removeProperty("--swipe-preview-x");
    layout.style.removeProperty("--swipe-opacity");
    delete layout.dataset.pageSwipeAnimating;
  };

  const finish = () => {
    cleanup();
    switchScreen(target.screenId, target.title);
  };

  const onTransitionEnd = event => {
    if (event.target !== currentScreen || event.propertyName !== "transform") return;
    finish();
  };

  layout.addEventListener("transitionend", onTransitionEnd);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      layout.classList.remove("is-swiping");
      layout.classList.add("is-swipe-animating");
      layout.style.setProperty("--swipe-x", `${step > 0 ? -width : width}px`);
      layout.style.setProperty("--swipe-preview-x", "0px");
      layout.style.setProperty("--swipe-opacity", "1");
    });
  });

  window.setTimeout(() => {
    if (layout.dataset.pageSwipeAnimating === "true") finish();
  }, 380);

  return true;
}

function setupAppPageSwipeNavigation() {
  const layout = document.querySelector(".main-layout");
  if (!layout || layout.dataset.pageSwipeReady === "true") return;
  layout.dataset.pageSwipeReady = "true";

  let startX = 0;
  let startY = 0;
  let lastX = 0;
  let tracking = false;
  let horizontal = false;
  let suppressNextClick = false;
  let suppressClickTimer = null;
  let dragTargetScreen = null;
  let dragTarget = null;
  let dragStep = 0;
  const threshold = 56;
  const intentThreshold = 12;

  const reset = () => {
    tracking = false;
    horizontal = false;
    startX = 0;
    startY = 0;
    lastX = 0;
  };

  const clearDragStyles = () => {
    if (dragTargetScreen) {
      dragTargetScreen.classList.remove("swipe-preview");
    }
    dragTargetScreen = null;
    dragTarget = null;
    dragStep = 0;
    layout.classList.remove("is-swiping", "is-swipe-animating");
    layout.style.removeProperty("--swipe-x");
    layout.style.removeProperty("--swipe-preview-x");
    layout.style.removeProperty("--swipe-opacity");
    delete layout.dataset.pageSwipeAnimating;
  };

  const preparePageDrag = dx => {
    const step = dx < 0 ? 1 : -1;
    if (dragTargetScreen && dragStep === step) return true;

    const screens = getMainSwipeScreens();
    const currentIndex = screens.findIndex(item => item.screenId === state.currentScreen);
    const targetIndex = currentIndex + step;

    if (currentIndex < 0 || targetIndex < 0 || targetIndex >= screens.length) {
      clearDragStyles();
      return false;
    }

    const targetScreen = document.getElementById(screens[targetIndex].screenId);
    if (!targetScreen) {
      clearDragStyles();
      return false;
    }

    if (dragTargetScreen) dragTargetScreen.classList.remove("swipe-preview");

    dragStep = step;
    dragTarget = screens[targetIndex];
    dragTargetScreen = targetScreen;
    dragTargetScreen.classList.add("swipe-preview");
    layout.dataset.pageSwipeAnimating = "true";
    layout.classList.remove("is-swipe-animating");
    layout.classList.add("is-swiping");
    return true;
  };

  const updatePageDragPosition = dx => {
    if (!preparePageDrag(dx)) return false;

    const width = layout.clientWidth || window.innerWidth || 360;
    const limitedDx = Math.max(-width, Math.min(width, dx));
    const previewStart = dragStep > 0 ? width : -width;
    const progress = Math.min(1, Math.abs(limitedDx) / Math.max(width, 1));

    layout.style.setProperty("--swipe-x", `${limitedDx}px`);
    layout.style.setProperty("--swipe-preview-x", `${previewStart + limitedDx}px`);
    layout.style.setProperty("--swipe-opacity", String(0.35 + (progress * 0.65)));
    return true;
  };

  const finishPageDrag = commit => {
    const currentScreen = document.getElementById(state.currentScreen);
    const target = dragTarget;
    const targetScreen = dragTargetScreen;
    const step = dragStep;
    const width = layout.clientWidth || window.innerWidth || 360;

    if (!target || !targetScreen || !step || !currentScreen) {
      clearDragStyles();
      return false;
    }

    layout.classList.remove("is-swiping");
    layout.classList.add("is-swipe-animating");

    if (commit) {
      layout.style.setProperty("--swipe-x", `${step > 0 ? -width : width}px`);
      layout.style.setProperty("--swipe-preview-x", "0px");
      layout.style.setProperty("--swipe-opacity", "1");
    } else {
      layout.style.setProperty("--swipe-x", "0px");
      layout.style.setProperty("--swipe-preview-x", `${step > 0 ? width : -width}px`);
      layout.style.setProperty("--swipe-opacity", "0.35");
    }

    const finish = () => {
      layout.removeEventListener("transitionend", onTransitionEnd);
      clearDragStyles();
      if (commit) switchScreen(target.screenId, target.title);
    };

    const onTransitionEnd = event => {
      if (event.target !== currentScreen || event.propertyName !== "transform") return;
      finish();
    };

    layout.addEventListener("transitionend", onTransitionEnd);
    window.setTimeout(() => {
      if (layout.dataset.pageSwipeAnimating === "true") finish();
    }, 380);

    return commit;
  };

  layout.addEventListener("touchstart", event => {
    if (event.touches.length !== 1) return;
    if (layout.dataset.pageSwipeAnimating === "true") return;

    const target = event.target;
    if (target.closest("dialog, .modal, .payment-popover, .calendar-panel, .bottom-nav")) return;

    tracking = true;
    horizontal = false;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    lastX = startX;
  }, { passive: true });

  layout.addEventListener("touchmove", event => {
    if (!tracking || event.touches.length !== 1) return;

    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    const dx = x - startX;
    const dy = y - startY;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (!horizontal) {
      if (absX < intentThreshold && absY < intentThreshold) return;

      if (absY > absX) {
        reset();
        clearDragStyles();
        return;
      }

      horizontal = true;
    }

    if (!updatePageDragPosition(dx)) return;
    event.preventDefault();
    lastX = x;
  }, { passive: false });

  layout.addEventListener("touchend", () => {
    if (!tracking || !horizontal) {
      reset();
      clearDragStyles();
      return;
    }

    const dx = lastX - startX;
    const commit = Math.abs(dx) >= threshold;
    reset();

    const didNavigate = finishPageDrag(commit);

    // Na een echte swipe kan iOS/Chrome nog een synthetische click afvuren
    // op het element waar de swipe begon. Die willen we kort blokkeren.
    // Belangrijk: deze blokkering mag NIET blijven hangen tot de eerste
    // echte tap op de nieuwe pagina, anders moet je daar 2 keer klikken.
    suppressNextClick = Boolean(didNavigate);
    window.clearTimeout(suppressClickTimer);
    if (suppressNextClick) {
      suppressClickTimer = window.setTimeout(() => {
        suppressNextClick = false;
      }, 300);
    }
  }, { passive: true });

  layout.addEventListener("touchcancel", () => {
    reset();
    finishPageDrag(false);
  }, { passive: true });

  layout.addEventListener("click", event => {
    if (!suppressNextClick) return;
    suppressNextClick = false;
    window.clearTimeout(suppressClickTimer);
    event.preventDefault();
    event.stopPropagation();
  }, true);
}


function renderAgendaList() {
  const data = getData();
  const list = document.getElementById("agendaList");

  document.getElementById("agendaListTitle").textContent = `${t("appointmentsOn")} ${formatLongDate(state.selectedDate)}`;
  const jumpBtn = document.getElementById("jumpToTodayBtn");
  if (jumpBtn) {
    jumpBtn.classList.toggle("hidden", state.selectedDate === todayStr);
  }

  const appts = data.appointments
    .filter(a => a.date === state.selectedDate)
    .sort((a, b) => a.time.localeCompare(b.time));

  if (!appts.length) {
    list.innerHTML = `<div class="empty-state">${t("noAppointmentsOnDay")}</div>`;
    return;
  }

  list.innerHTML = "";

  const card = document.createElement("div");
  card.className = "appointment-card";

  appts.forEach(app => {
    const customer = customerById(data, app.customerId);
    const service = serviceById(data, app.serviceId);

    const row = document.createElement("div");
    row.className = "appointment-row";
    const endTime = getAppointmentEndTime(app, getSettings().defaultBreakMinutes);

    const appointmentMetaParts = [];
    if (service?.name) {
      appointmentMetaParts.push(service.name);
    }
    if ((app.status || "").toLowerCase() === "no-show") {
      appointmentMetaParts.push("no show");
    } else if (app.paid && paymentMethodNameForAppointment(app, data)) {
      appointmentMetaParts.push(paymentMethodNameForAppointment(app, data));
    }

    row.innerHTML = `
      <div class="time-block">
        <div class="time">${app.time}</div>
        <div class="time-end">tot ${endTime}</div>
      </div>
      <div>
        <div class="main-name">${customer ? fullName(customer) : "Onbekend"}</div>
        <div class="meta">${appointmentMetaParts.join(" · ")}</div>
      </div>
      <button class="price-chip ${app.paid ? "paid" : ""}" data-id="${app.id}" type="button">${euro(app.price, app.currency)}</button>
    `;

    row.addEventListener("click", (e) => {
      if (e.target.closest(".price-chip")) return;
      openEditAppointmentDialog(app.id);
    });

    card.appendChild(row);
  });

  list.appendChild(card);

  list.querySelectorAll(".price-chip").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openPaymentDialog(btn.dataset.id, btn);
    });
  });
}

function renderAlphabetFilter() {
  const wrap = document.getElementById("alphabetFilter");
  const data = getData();

  const letters = [...new Set(
    data.customers
      .map(c => (c.firstName || "").trim().charAt(0).toUpperCase())
      .filter(Boolean)
  )].sort();

  wrap.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "alphabet-btn all-btn" + (!state.clientLetter ? " active" : "");
  allBtn.textContent = "Alle";
  allBtn.onclick = () => {
    state.clientLetter = "";
    renderAlphabetFilter();
    renderClients();
  };
  wrap.appendChild(allBtn);

  letters.forEach(letter => {
    const btn = document.createElement("button");
    btn.className = "alphabet-btn" + (state.clientLetter === letter ? " active" : "");
    btn.textContent = letter;

    btn.onclick = () => {
      state.clientLetter = letter;
      renderAlphabetFilter();
      renderClients();
    };

    wrap.appendChild(btn);
  });
}

function renderClients() {
  const data = getData();
  const q = document.getElementById("clientSearch").value.trim().toLowerCase();
  const list = document.getElementById("clientsList");

  const compactQuery = q.replace(/\D/g, "");
  let clients = data.customers.filter(c => {
    const haystack = customerSearchText(c);
    const phoneDigits = String(c.phone || "").replace(/\D/g, "");
    return haystack.includes(q) || (compactQuery && phoneDigits.includes(compactQuery));
  });

  if (state.clientLetter) {
    clients = clients.filter(c => (c.firstName || "").toUpperCase().startsWith(state.clientLetter));
  }

  clients.sort((a, b) => (a.firstName || "").localeCompare(b.firstName || ""));

  if (!clients.length) {
    list.innerHTML = `<div class="empty-state">${t("noClientsFound")}</div>`;
    return;
  }

  list.innerHTML = "";

  clients.forEach(client => {
    const count = data.appointments.filter(a => String(a.customerId) === String(client.id)).length;
    const phone = String(client.phone || "").trim();
    const card = document.createElement("div");
    card.className = "client-card";

    card.innerHTML = `
      <button type="button" data-id="${client.id}">
        <div class="client-name">${escapeHtml(fullName(client) || "Naamloos")}</div>
        <div class="meta">${escapeHtml(phone || t("noPhone"))} · ${count} ${count === 1 ? t("appointmentSingular") : t("appointmentPlural")}</div>
      </button>
    `;

    card.querySelector("button").addEventListener("click", () => openClientDetail(client.id));
    list.appendChild(card);
  });
}

function renderServices() {
  const data = getData();
  const list = document.getElementById("servicesList");
  if (!list) return;

  const services = Array.isArray(data.services) ? data.services : [];
  const activeServices = services
    .filter(service => service.isActive !== false)
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "nl-BE"));
  const inactiveServices = services
    .filter(service => service.isActive === false)
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "nl-BE"));
  const visibleServices = state.showInactiveServices
    ? [...activeServices, ...inactiveServices]
    : activeServices;

  list.innerHTML = "";

  if (!visibleServices.length) {
    list.innerHTML = `<div class="empty-state">${t("noActiveServices")}</div>`;
  } else {
    visibleServices.forEach(service => {
      const isInactive = service.isActive === false;
      const card = document.createElement("div");
      card.className = `service-card${isInactive ? " service-card-inactive" : ""}`;

      card.innerHTML = `
        <button type="button" data-id="${service.id}">
          <div class="client-name">${escapeHtml(service.name || "Naamloze dienst")}</div>
          <div class="meta">${service.duration} min · ${euro(service.price)}${isInactive ? ` · ${t("inactive")}` : ""}</div>
        </button>
      `;

      card.querySelector("button").addEventListener("click", () => openEditServiceDialog(service.id));
      list.appendChild(card);
    });
  }

  if (inactiveServices.length) {
    const toggleWrap = document.createElement("label");
    toggleWrap.className = "inactive-services-toggle";
    toggleWrap.innerHTML = `
      <input id="showInactiveServices" type="checkbox" ${state.showInactiveServices ? "checked" : ""} />
      <span>${t("showInactiveServices")}</span>
    `;

    toggleWrap.querySelector("input").addEventListener("change", event => {
      state.showInactiveServices = event.target.checked;
      renderServices();
    });

    list.appendChild(toggleWrap);
  }
}


function paymentMethodLabel(value) {
  if (!value) return "";
  const data = getData();
  return paymentMethodNameById(data, value) || String(value);
}

function formatRevenueDayChip(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const day = new Intl.DateTimeFormat(getCurrentLanguage(), { weekday: "short" }).format(d);
  return `${capitalizeFirst(day)} ${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function formatRevenueDayTile(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const day = new Intl.DateTimeFormat(getCurrentLanguage(), { weekday: "long" }).format(d);
  return `${capitalizeFirst(day)}<br>${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
}

function formatRevenueWeekTile(dateStr) {
  const bounds = weekBounds(dateStr);
  const start = new Date(bounds.start + "T00:00:00");
  const end = new Date(bounds.end + "T00:00:00");
  return `${String(start.getDate()).padStart(2, "0")}-${String(start.getMonth() + 1).padStart(2, "0")}-${start.getFullYear()}<br>${String(end.getDate()).padStart(2, "0")}-${String(end.getMonth() + 1).padStart(2, "0")}-${end.getFullYear()}`;
}

function formatRevenueMonthTile(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return `${capitalizeFirst(getMonthNameLong(d.getMonth()))}<br>${d.getFullYear()}`;
}

function shiftRevenueDate(baseDateStr, mode, step) {
  const d = new Date(baseDateStr + "T00:00:00");

  if (mode === "year") {
    d.setFullYear(d.getFullYear() + step);
    return formatDateInput(d);
  }

  if (mode === "month") {
    d.setMonth(d.getMonth() + step);
    return formatDateInput(d);
  }

  if (mode === "week") {
    d.setDate(d.getDate() + (step * 7));
    return formatDateInput(d);
  }

  d.setDate(d.getDate() + step);
  return formatDateInput(d);
}

function setRevenuePeriod(type, dateStr) {
  const safeDate = dateStr || document.getElementById("revenueDate").value || todayStr;
  const periodType = document.getElementById("revenuePeriodType");
  const dateInput = document.getElementById("revenueDate");

  if (periodType) periodType.value = type;
  if (dateInput) dateInput.value = safeDate;

  renderRevenue();
}

function syncRevenuePeriodChips() {
  const type = document.getElementById("revenuePeriodType").value;
  const anchor = document.getElementById("revenueDate").value || todayStr;
  const anchorDate = new Date(anchor + "T00:00:00");

  const yearBtn = document.getElementById("revenueYearBtn");
  const monthBtn = document.getElementById("revenueMonthBtn");
  const weekBtn = document.getElementById("revenueWeekBtn");
  const dayBtn = document.getElementById("revenueDayBtn");

  const yearLabel = document.getElementById("revenueYearLabel");
  const monthLabel = document.getElementById("revenueMonthLabel");
  const weekLabel = document.getElementById("revenueWeekLabel");
  const dayLabel = document.getElementById("revenueDayLabel");

  if (yearLabel) yearLabel.textContent = String(anchorDate.getFullYear());
  if (monthLabel) monthLabel.innerHTML = formatRevenueMonthTile(anchor);
  if (weekLabel) weekLabel.innerHTML = formatRevenueWeekTile(anchor);
  if (dayLabel) dayLabel.innerHTML = formatRevenueDayTile(anchor);

  if (yearBtn) yearBtn.classList.toggle("active", type === "year");
  if (monthBtn) monthBtn.classList.toggle("active", type === "month");
  if (weekBtn) weekBtn.classList.toggle("active", type === "week");
  if (dayBtn) dayBtn.classList.toggle("active", type === "day");
}

function revenueFilteredAppointments() {
  const data = getData();
  const type = document.getElementById("revenuePeriodType").value;
  const anchor = document.getElementById("revenueDate").value || todayStr;
  const paymentStatusFilter = document.getElementById("revenuePaymentStatusFilter").value;
  const paymentFilter = document.getElementById("revenuePaymentFilter").value;

  let filtered = data.appointments.filter(a => a.status !== "no-show");

  if (type === "day") {
    filtered = filtered.filter(a => a.date === anchor);
  } else if (type === "week") {
    const bounds = weekBounds(anchor);
    filtered = filtered.filter(a => a.date >= bounds.start && a.date <= bounds.end);
  } else if (type === "month") {
    const prefix = anchor.slice(0, 7);
    filtered = filtered.filter(a => a.date.startsWith(prefix));
  } else if (type === "year") {
    const prefix = anchor.slice(0, 4);
    filtered = filtered.filter(a => a.date.startsWith(prefix));
  }

  if (paymentStatusFilter === "paid") filtered = filtered.filter(a => a.paid);
  if (paymentStatusFilter === "unpaid") filtered = filtered.filter(a => !a.paid);
  if (paymentFilter) filtered = filtered.filter(a => paymentMethodNameForAppointment(a, data) === paymentFilter);

  return filtered;
}

function renderRevenueFilters() {
  const data = getData();
  const paymentSel = document.getElementById("revenuePaymentFilter");
  const existingPayment = paymentSel ? paymentSel.value : "";

  if (paymentSel) {
    paymentSel.innerHTML =
      `<option value="">${t("allPaymentMethods")}</option>` +
      getRevenuePaymentFilterOptions(data).map(name => `<option value="${name}">${name}</option>`).join("");
    paymentSel.value = existingPayment;
  }

}


function clampRevenueDay(year, monthIndex, day) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  return Math.min(day, daysInMonth);
}

function getRevenueDataYears() {
  const data = getData();
  const appointmentYears = data.appointments
    .map(a => Number(String(a.date || "").slice(0, 4)))
    .filter(Boolean);

  const currentYear = new Date((document.getElementById("revenueDate")?.value || todayStr) + "T00:00:00").getFullYear();
  const minYear = appointmentYears.length ? Math.min(...appointmentYears, currentYear) : currentYear - 3;
  const maxYear = appointmentYears.length ? Math.max(...appointmentYears, currentYear) : currentYear + 3;

  return Array.from({ length: (maxYear - minYear + 5) }, (_, i) => minYear - 2 + i);
}

function centerRevenueWheelColumn(column, value, behavior = "auto") {
  if (!column) return;
  const option = column.querySelector(`.revenue-wheel-option[data-value="${value}"]`);
  if (!option) return;
  const target = option.offsetTop - (column.clientHeight / 2) + (option.offsetHeight / 2);
  if (behavior === "smooth") {
    column.scrollTo({ top: target, behavior: "smooth" });
  } else {
    column.scrollTop = target;
  }
  updateRevenueWheelColumnSelection(column);
}

function updateRevenueWheelColumnSelection(column) {
  if (!column) return null;
  const options = Array.from(column.querySelectorAll(".revenue-wheel-option"));
  if (!options.length) return null;

  const columnCenter = column.scrollTop + (column.clientHeight / 2);
  let closest = options[0];
  let bestDistance = Infinity;

  options.forEach(option => {
    const optionCenter = option.offsetTop + (option.offsetHeight / 2);
    const distance = Math.abs(optionCenter - columnCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      closest = option;
    }
  });

  options.forEach(option => option.classList.toggle("active", option === closest));
  return closest?.dataset?.value ?? null;
}

function attachRevenueWheelColumnEvents(column, key) {
  if (!column) return;
  let timeoutId = null;
  const optionHeight = 48;

  const finish = (behavior = "smooth") => {
    const value = updateRevenueWheelColumnSelection(column);
    if (value != null) {
      const pickerState = column.closest("#appointmentWheelColumns") ? appointmentPickerState : revenuePickerState;
      pickerState.selected[key] = value;
      centerRevenueWheelColumn(column, value, behavior);
    }
  };

  column.addEventListener("scroll", () => {
    updateRevenueWheelColumnSelection(column);
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => finish("smooth"), 110);
  });

  column.addEventListener("wheel", (event) => {
    if (window.matchMedia("(pointer:fine)").matches) {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const targetTop = column.scrollTop + (direction * optionHeight);
      column.scrollTo({ top: targetTop, behavior: "smooth" });
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => finish("smooth"), 130);
    }
  }, { passive: false });

  column.querySelectorAll(".revenue-wheel-option").forEach(option => {
    option.addEventListener("click", () => {
      const pickerState = column.closest("#appointmentWheelColumns") ? appointmentPickerState : revenuePickerState;
      pickerState.selected[key] = option.dataset.value;
      centerRevenueWheelColumn(column, option.dataset.value, "smooth");
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => finish("smooth"), 130);
    });
  });

  // Niet meteen finish("auto") uitvoeren: vóór het openen van de dialog
  // hebben de wielkolommen nog geen betrouwbare hoogte. Daardoor werd de
  // eerste optie (bv. 01 / Januari / 2024) als actief opgeslagen vóór we
  // konden centreren op de datum die in Omzet actief is.
}

function buildRevenueWheelColumn(key, values, formatter = value => value) {
  return `
    <div class="revenue-wheel-column" data-key="${key}">
      ${values.map(value => `<div class="revenue-wheel-option" data-value="${value}">${formatter(value)}</div>`).join("")}
    </div>
  `;
}




const appointmentPickerState = {
  mode: "date",
  selected: {}
};

function formatAppointmentDateLabel(dateStr) {
  if (!dateStr) return t("chooseDate");
  const d = new Date(dateStr + "T00:00:00");
  if (Number.isNaN(d.getTime())) return t("chooseDate");
  const dayNames = [t("sundayShort"), t("mondayShort"), t("tuesdayShort"), t("wednesdayShort"), t("thursdayShort"), t("fridayShort"), t("saturdayShort")];
  return `${dayNames[d.getDay()]} ${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
}

function formatAppointmentTimeLabel(timeStr) {
  if (!timeStr) return t("chooseTime");
  const [h = "00", m = "00"] = String(timeStr).split(":");
  return `${String(Number(h) || 0).padStart(2, "0")}:${String(Number(m) || 0).padStart(2, "0")}`;
}

function syncAppointmentDateTimeDisplays() {
  const dateInput = document.getElementById("appointmentDate");
  const timeInput = document.getElementById("appointmentTime");
  const dateBtn = document.getElementById("appointmentDateDisplayBtn");
  const timeBtn = document.getElementById("appointmentTimeDisplayBtn");

  if (dateBtn && dateInput) dateBtn.textContent = formatAppointmentDateLabel(dateInput.value);
  if (timeBtn && timeInput) timeBtn.textContent = formatAppointmentTimeLabel(timeInput.value);
}

function getAppointmentPickerYears(selectedYear) {
  const data = getData();
  const appointmentYears = (data.appointments || [])
    .map(a => Number(String(a.date || "").slice(0, 4)))
    .filter(Boolean);
  const currentYear = Number(selectedYear) || today.getFullYear();
  const minYear = appointmentYears.length ? Math.min(...appointmentYears, currentYear) : currentYear - 3;
  const maxYear = appointmentYears.length ? Math.max(...appointmentYears, currentYear) : currentYear + 3;
  return Array.from({ length: (maxYear - minYear + 7) }, (_, i) => minYear - 3 + i);
}

function openAppointmentWheelPicker(mode) {
  const dialog = document.getElementById("appointmentWheelPickerDialog");
  const title = document.getElementById("appointmentWheelPickerTitle");
  const columnsWrap = document.getElementById("appointmentWheelColumns");
  if (!dialog || !title || !columnsWrap) return;

  const dateValue = document.getElementById("appointmentDate")?.value || state.selectedDate || todayStr;
  const timeValue = document.getElementById("appointmentTime")?.value || "10:00";
  const date = new Date(dateValue + "T00:00:00");
  const selectedYear = date.getFullYear();
  const selectedMonthIndex = date.getMonth();
  const selectedDay = date.getDate();
  const [rawHour = "10", rawMinute = "00"] = timeValue.split(":");
  const selectedHour = Math.max(0, Math.min(23, Number(rawHour) || 0));
  const selectedMinute = Math.max(0, Math.min(59, Number(rawMinute) || 0));

  appointmentPickerState.mode = mode;
  appointmentPickerState.selected = {};

  if (mode === "time") {
    title.textContent = t("chooseTime");
    columnsWrap.className = "revenue-wheel-columns two-cols";
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 60 }, (_, i) => i);
    columnsWrap.innerHTML =
      buildRevenueWheelColumn("hour", hours, value => String(value).padStart(2, "0")) +
      buildRevenueWheelColumn("minute", minutes, value => String(value).padStart(2, "0"));
    appointmentPickerState.selected.hour = String(selectedHour);
    appointmentPickerState.selected.minute = String(selectedMinute);
  } else {
    title.textContent = t("chooseDate");
    columnsWrap.className = "revenue-wheel-columns three-cols";
    const years = getAppointmentPickerYears(selectedYear);
    const months = Array.from({ length: 12 }, (_, i) => i);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    columnsWrap.innerHTML =
      buildRevenueWheelColumn("day", days, value => String(value).padStart(2, "0")) +
      buildRevenueWheelColumn("monthIndex", months, value => capitalizeFirst(getMonthNameLong(value))) +
      buildRevenueWheelColumn("year", years, value => value);
    appointmentPickerState.selected.day = String(selectedDay);
    appointmentPickerState.selected.monthIndex = String(selectedMonthIndex);
    appointmentPickerState.selected.year = String(selectedYear);
  }

  const columns = Array.from(columnsWrap.querySelectorAll(".revenue-wheel-column"));
  columns.forEach(column => attachRevenueWheelColumnEvents(column, column.dataset.key));

  const centerActiveValues = (behavior = "auto") => {
    Object.entries(appointmentPickerState.selected).forEach(([key, value]) => {
      centerRevenueWheelColumn(columnsWrap.querySelector(`[data-key="${key}"]`), value, behavior);
    });
  };

  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "open");

  requestAnimationFrame(() => {
    centerActiveValues("auto");
    requestAnimationFrame(() => centerActiveValues("auto"));
  });
}

function applyAppointmentWheelPickerSelection() {
  if (appointmentPickerState.mode === "time") {
    const hour = Math.max(0, Math.min(23, Number(appointmentPickerState.selected.hour) || 0));
    const minute = Math.max(0, Math.min(59, Number(appointmentPickerState.selected.minute) || 0));
    const timeInput = document.getElementById("appointmentTime");
    if (timeInput) timeInput.value = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
    syncAppointmentDateTimeDisplays();
    return;
  }

  const currentDate = new Date((document.getElementById("appointmentDate")?.value || state.selectedDate || todayStr) + "T00:00:00");
  const year = Number(appointmentPickerState.selected.year || currentDate.getFullYear());
  const monthIndex = Number(appointmentPickerState.selected.monthIndex || currentDate.getMonth());
  const rawDay = Number(appointmentPickerState.selected.day || currentDate.getDate());
  const day = clampRevenueDay(year, monthIndex, rawDay);
  const dateInput = document.getElementById("appointmentDate");
  if (dateInput) dateInput.value = formatDateInput(new Date(year, monthIndex, day));
  syncAppointmentDateTimeDisplays();
}

function getRevenueWeekOfMonth(date) {
  const day = date.getDate();
  return Math.min(4, Math.max(1, Math.ceil(day / 7)));
}

function dateFromRevenueWeekOfMonth(year, monthIndex, weekNumber) {
  const safeWeek = Math.min(4, Math.max(1, Number(weekNumber) || 1));
  const day = clampRevenueDay(year, monthIndex, ((safeWeek - 1) * 7) + 1);
  return new Date(year, monthIndex, day);
}

function openRevenueWheelPicker(mode) {
  const dialog = document.getElementById("revenueWheelPickerDialog");
  const title = document.getElementById("revenueWheelPickerTitle");
  const columnsWrap = document.getElementById("revenueWheelColumns");
  const anchor = document.getElementById("revenueDate").value || todayStr;
  const anchorDate = new Date(anchor + "T00:00:00");
  const selectedYear = anchorDate.getFullYear();
  const selectedMonthIndex = anchorDate.getMonth();
  const selectedDay = anchorDate.getDate();
  const selectedWeek = getRevenueWeekOfMonth(anchorDate);

  revenuePickerState.mode = mode;
  revenuePickerState.columns = [];
  revenuePickerState.selected = {};

  const years = getRevenueDataYears();
  const months = Array.from({ length: 12 }, (_, i) => i);

  if (mode === "year") {
    title.textContent = "Kies jaar";
    columnsWrap.className = "revenue-wheel-columns";
    columnsWrap.innerHTML = buildRevenueWheelColumn("year", years, value => value);
  } else if (mode === "month") {
    title.textContent = "Kies maand";
    columnsWrap.className = "revenue-wheel-columns two-cols";
    columnsWrap.innerHTML =
      buildRevenueWheelColumn("monthIndex", months, value => capitalizeFirst(getMonthNameLong(value))) +
      buildRevenueWheelColumn("year", years, value => value);
  } else if (mode === "week") {
    title.textContent = "Kies week";
    columnsWrap.className = "revenue-wheel-columns three-cols";
    const weeks = [1, 2, 3, 4];
    columnsWrap.innerHTML =
      buildRevenueWheelColumn("week", weeks, value => `Week ${value}`) +
      buildRevenueWheelColumn("monthIndex", months, value => capitalizeFirst(getMonthNameLong(value))) +
      buildRevenueWheelColumn("year", years, value => value);
  } else {
    title.textContent = "Kies dag";
    columnsWrap.className = "revenue-wheel-columns three-cols";
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    columnsWrap.innerHTML =
      buildRevenueWheelColumn("day", days, value => String(value).padStart(2, "0")) +
      buildRevenueWheelColumn("monthIndex", months, value => capitalizeFirst(getMonthNameLong(value))) +
      buildRevenueWheelColumn("year", years, value => value);
  }

  const columns = Array.from(columnsWrap.querySelectorAll(".revenue-wheel-column"));
  revenuePickerState.columns = columns;

  if (mode === "year") {
    revenuePickerState.selected.year = String(selectedYear);
  } else if (mode === "month") {
    revenuePickerState.selected.monthIndex = String(selectedMonthIndex);
    revenuePickerState.selected.year = String(selectedYear);
  } else if (mode === "week") {
    revenuePickerState.selected.week = String(selectedWeek);
    revenuePickerState.selected.monthIndex = String(selectedMonthIndex);
    revenuePickerState.selected.year = String(selectedYear);
  } else {
    revenuePickerState.selected.day = String(selectedDay);
    revenuePickerState.selected.monthIndex = String(selectedMonthIndex);
    revenuePickerState.selected.year = String(selectedYear);
  }

  columns.forEach(column => attachRevenueWheelColumnEvents(column, column.dataset.key));

  const centerActiveRevenuePickerValues = (behavior = "auto") => {
    Object.entries(revenuePickerState.selected).forEach(([key, value]) => {
      centerRevenueWheelColumn(columnsWrap.querySelector(`[data-key="${key}"]`), value, behavior);
    });
  };

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "open");
  }

  // Dialoginhoud heeft pas na openen betrouwbare hoogtes. Daarom pas na
  // showModal centreren, zodat de actieve dag/week/maand/jaar zichtbaar
  // geselecteerd staat i.p.v. de eerste optie in de lijst.
  requestAnimationFrame(() => {
    centerActiveRevenuePickerValues("auto");
    requestAnimationFrame(() => centerActiveRevenuePickerValues("auto"));
  });
}

function applyRevenueWheelPickerSelection() {
  const anchor = document.getElementById("revenueDate").value || todayStr;
  const anchorDate = new Date(anchor + "T00:00:00");
  const currentDay = anchorDate.getDate();

  if (revenuePickerState.mode === "year") {
    const year = Number(revenuePickerState.selected.year || anchorDate.getFullYear());
    const monthIndex = anchorDate.getMonth();
    const day = clampRevenueDay(year, monthIndex, currentDay);
    setRevenuePeriod("year", formatDateInput(new Date(year, monthIndex, day)));
    return;
  }

  if (revenuePickerState.mode === "month") {
    const year = Number(revenuePickerState.selected.year || anchorDate.getFullYear());
    const monthIndex = Number(revenuePickerState.selected.monthIndex || anchorDate.getMonth());
    const day = clampRevenueDay(year, monthIndex, currentDay);
    setRevenuePeriod("month", formatDateInput(new Date(year, monthIndex, day)));
    return;
  }

  if (revenuePickerState.mode === "week") {
    const year = Number(revenuePickerState.selected.year || anchorDate.getFullYear());
    const monthIndex = Number(revenuePickerState.selected.monthIndex || anchorDate.getMonth());
    const week = Number(revenuePickerState.selected.week || getRevenueWeekOfMonth(anchorDate));
    setRevenuePeriod("week", formatDateInput(dateFromRevenueWeekOfMonth(year, monthIndex, week)));
    return;
  }

  const year = Number(revenuePickerState.selected.year || anchorDate.getFullYear());
  const monthIndex = Number(revenuePickerState.selected.monthIndex || anchorDate.getMonth());
  const rawDay = Number(revenuePickerState.selected.day || currentDay);
  const day = clampRevenueDay(year, monthIndex, rawDay);
  setRevenuePeriod("day", formatDateInput(new Date(year, monthIndex, day)));
}

function openRevenueDatePicker(mode = "day") {
  const nativeInput = document.getElementById("revenueNativeDatePicker");
  const revenueDate = document.getElementById("revenueDate").value || todayStr;

  if (!nativeInput) {
    setRevenuePeriod(mode, revenueDate);
    return;
  }

  nativeInput.dataset.mode = mode;
  nativeInput.value = revenueDate;

  if (typeof nativeInput.showPicker === "function") {
    nativeInput.showPicker();
  } else {
    nativeInput.click();
  }
}

function openRevenueDayPicker() {
  openRevenueDatePicker("day");
}


function buildRevenueChartData(filtered, type, anchor) {
  if (type === "year") {
    return Array.from({ length: 12 }, (_, index) => {
      const month = String(index + 1).padStart(2, "0");
      const prefix = `${anchor.slice(0, 4)}-${month}`;
      const items = filtered.filter(a => a.date.startsWith(prefix));
      return {
        label: String(index + 1),
        paid: items.filter(a => a.paid).reduce((sum, a) => sum + Number(a.price || 0), 0),
        unpaid: items.filter(a => !a.paid).reduce((sum, a) => sum + Number(a.price || 0), 0)
      };
    });
  }

  if (type === "week") {
    const bounds = weekBounds(anchor);
    return Array.from({ length: 7 }, (_, index) => {
      const d = new Date(bounds.start + "T00:00:00");
      d.setDate(d.getDate() + index);
      const key = formatDateInput(d);
      const items = filtered.filter(a => a.date === key);
      return {
        label: formatRevenueDayChip(key),
        paid: items.filter(a => a.paid).reduce((sum, a) => sum + Number(a.price || 0), 0),
        unpaid: items.filter(a => !a.paid).reduce((sum, a) => sum + Number(a.price || 0), 0)
      };
    });
  }

  if (type === "month") {
    const year = Number(anchor.slice(0, 4));
    const monthIndex = Number(anchor.slice(5, 7)) - 1;
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, index) => {
      const day = String(index + 1).padStart(2, "0");
      const key = `${anchor.slice(0, 7)}-${day}`;
      const items = filtered.filter(a => a.date === key);
      return {
        label: String(index + 1),
        paid: items.filter(a => a.paid).reduce((sum, a) => sum + Number(a.price || 0), 0),
        unpaid: items.filter(a => !a.paid).reduce((sum, a) => sum + Number(a.price || 0), 0)
      };
    });
  }

  const items = filtered.slice().sort((a, b) => a.time.localeCompare(b.time));
  return items.map(a => ({
    label: a.time || "",
    paid: a.paid ? Number(a.price || 0) : 0,
    unpaid: !a.paid ? Number(a.price || 0) : 0
  }));
}

function renderRevenueChart(filtered, type, anchor) {
  const chartWrap = document.getElementById("revenueChart");
  const subtitle = document.getElementById("revenueChartSubtitle");

  if (!chartWrap) return;

  const chartData = buildRevenueChartData(filtered, type, anchor);
  const visibleData = chartData.filter(item => item.paid > 0 || item.unpaid > 0);
  const useFullPeriodWidth = ["week", "month", "year"].includes(type);
  const dataToRender = useFullPeriodWidth ? chartData : (visibleData.length ? visibleData : chartData);
  const maxValue = Math.max(...dataToRender.map(item => item.paid + item.unpaid), 0);
  const isDayChart = type === "day";
  const renderedBarCount = Math.max(dataToRender.length, 1);
  const chartAvailableWidth = document.getElementById("revenueChart")?.clientWidth || 320;
  const dayGap = Math.max(6, Math.min(14, Math.round(chartAvailableWidth * 0.02)));
  const calculatedDayColumnWidth = isDayChart
    ? Math.max(32, Math.floor((chartAvailableWidth - ((renderedBarCount - 1) * dayGap) - 16) / renderedBarCount))
    : null;
  const dayColumnMinWidth = isDayChart
    ? Math.max(32, Math.min(92, calculatedDayColumnWidth))
    : null;
  const dayStackWidth = isDayChart
    ? Math.max(8, Math.min(48, Math.round(dayColumnMinWidth * 0.48)))
    : null;

  if (subtitle) {
    subtitle.textContent =
      type === "year" ? t("yearRevenue") :
      type === "month" ? t("monthRevenue") :
      type === "week" ? t("weekRevenue") :
      t("dayRevenue");
  }

  if (!dataToRender.length || maxValue === 0) {
    chartWrap.innerHTML = `<div class="empty-state">${t("noRevenueForSelection")}</div>`;
    return;
  }

  chartWrap.innerHTML = `
    <div class="revenue-bars ${useFullPeriodWidth ? `revenue-bars-even revenue-bars-${type}` : (isDayChart ? "revenue-bars-day-dynamic" : "")}" style="--revenue-bar-count:${renderedBarCount};${isDayChart ? `--revenue-day-gap:${dayGap}px;--revenue-day-col-width:${dayColumnMinWidth}px;--revenue-day-stack-width:${dayStackWidth}px;` : ""}">
      ${dataToRender.map(item => {
        const total = item.paid + item.unpaid;
        const totalHeight = Math.max(8, (total / maxValue) * 220);
        const paidHeight = total > 0 ? (item.paid / total) * totalHeight : 0;
        const unpaidHeight = totalHeight - paidHeight;

        return `
          <div class="revenue-bar-col" title="${item.label} · ${euro(total)}">
            <div class="revenue-bar-stack" style="height:${totalHeight}px">
              ${unpaidHeight > 0 ? `<span class="revenue-bar-segment unpaid" style="height:${unpaidHeight}px"></span>` : ""}
              ${paidHeight > 0 ? `<span class="revenue-bar-segment paid" style="height:${paidHeight}px"></span>` : ""}
            </div>
            <span class="revenue-bar-label">${item.label}</span>
          </div>
        `;
      }).join("")}
    </div>
    <div class="revenue-chart-legend">
      <span><i class="paid"></i> ${t("paid")}</span>
      <span><i class="unpaid"></i> ${t("unpaid")}</span>
    </div>
  `;

  const bars = chartWrap.querySelector('.revenue-bars');
  if (bars) {
    bars.addEventListener('wheel', event => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      if (bars.scrollWidth <= bars.clientWidth) return;
      event.preventDefault();
      bars.scrollLeft += event.deltaY;
    }, { passive: false });
  }
}

function updateRevenueActionBar() {
  const bar = document.getElementById('revenueActionBar');
  const csvButton = document.getElementById('revenueExportCsvBtn');
  const reportButton = document.getElementById('revenueExportReportBtn');
  if (!bar) return;

  const shouldShow = state.currentScreen === 'revenueScreen';
  bar.classList.toggle('hidden', !shouldShow);
  if (csvButton) csvButton.disabled = !shouldShow;
  if (reportButton) reportButton.disabled = !shouldShow;
}

function getRevenueExportTitle() {
  const type = document.getElementById("revenuePeriodType")?.value || 'day';
  const anchor = document.getElementById("revenueDate")?.value || todayStr;

  if (type === 'year') return `omzet_${anchor.slice(0, 4)}`;
  if (type === 'month') return `omzet_${anchor.slice(0, 7)}`;
  if (type === 'week') {
    const bounds = weekBounds(anchor);
    return `omzet_week_${bounds.start}_tot_${bounds.end}`;
  }
  return `omzet_${anchor}`;
}

function csvEscape(value) {
  const safe = String(value ?? '').replace(/"/g, '""');
  return `"${safe}"`;
}

function downloadRevenueCsv() {
  const data = getData();
  const filtered = revenueFilteredAppointments()
    .slice()
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));

  const paymentStatusFilter = document.getElementById('revenuePaymentStatusFilter')?.value || '';
  const paymentFilter = document.getElementById('revenuePaymentFilter')?.value || '';
  const periodType = document.getElementById('revenuePeriodType')?.value || 'day';
  const periodDate = document.getElementById('revenueDate')?.value || todayStr;

  const amountForCsv = (value) => Number(value || 0).toFixed(2).replace('.', ',');
  const sumAmount = (items, predicate = () => true) => items
    .filter(predicate)
    .reduce((sum, app) => sum + Number(app.price || 0), 0);

  const totalRevenue = sumAmount(filtered);
  const paidRevenue = sumAmount(filtered, app => app.paid);
  const unpaidRevenue = sumAmount(filtered, app => !app.paid);

  const rows = [
    ['Periode type', periodType],
    ['Periode datum', periodDate],
    ['Filter betaalstatus', paymentStatusFilter || 'alle'],
    ['Filter betaalwijze', paymentFilter || 'alle'],
    [],
    ['OVERZICHT'],
    ['Aantal afspraken', filtered.length],
    ['Som totaal', amountForCsv(totalRevenue)],
    ['Som betaald', amountForCsv(paidRevenue)],
    ['Som onbetaald', amountForCsv(unpaidRevenue)],
    []
  ];

  const paymentTotals = new Map();
  filtered.forEach(app => {
    const method = app.paid ? (paymentMethodNameForAppointment(app, data) || 'Onbekend') : 'Onbetaald';
    const current = paymentTotals.get(method) || { count: 0, total: 0, paid: 0, unpaid: 0 };
    current.count += 1;
    current.total += Number(app.price || 0);
    if (app.paid) current.paid += Number(app.price || 0);
    if (!app.paid) current.unpaid += Number(app.price || 0);
    paymentTotals.set(method, current);
  });

  rows.push(['TOTALEN PER BETAALWIJZE']);
  rows.push(['Betaalwijze', 'Aantal afspraken', 'Totaal', 'Betaald', 'Onbetaald']);
  if (paymentTotals.size) {
    Array.from(paymentTotals.entries())
      .sort(([a], [b]) => a.localeCompare(b, 'nl-BE'))
      .forEach(([method, values]) => {
        rows.push([
          method,
          values.count,
          amountForCsv(values.total),
          amountForCsv(values.paid),
          amountForCsv(values.unpaid)
        ]);
      });
  } else {
    rows.push(['Geen gegevens', 0, amountForCsv(0), amountForCsv(0), amountForCsv(0)]);
  }
  rows.push([]);

  const periodTotals = new Map();
  filtered.forEach(app => {
    let key = app.date || '';
    let label = app.date || '';

    if (periodType === 'year') {
      key = String(app.date || '').slice(0, 7);
      const monthNumber = Number(key.slice(5, 7));
      label = monthNumber ? `${getMonthNameLong(monthNumber - 1)} ${key.slice(0, 4)}` : key;
    } else if (periodType === 'month' || periodType === 'week') {
      label = app.date ? formatLongDate(app.date) : '';
    } else {
      label = app.time || app.date || '';
    }

    const current = periodTotals.get(key) || { label, count: 0, total: 0, paid: 0, unpaid: 0 };
    current.count += 1;
    current.total += Number(app.price || 0);
    if (app.paid) current.paid += Number(app.price || 0);
    if (!app.paid) current.unpaid += Number(app.price || 0);
    periodTotals.set(key, current);
  });

  const periodOverviewTitle =
    periodType === 'year' ? 'TOTALEN PER MAAND' :
    periodType === 'month' ? 'TOTALEN PER DAG' :
    periodType === 'week' ? 'TOTALEN PER DAG' :
    'TOTALEN PER AFSPRAAKMOMENT';

  rows.push([periodOverviewTitle]);
  rows.push([
    periodType === 'year' ? 'Maand' : (periodType === 'month' || periodType === 'week') ? 'Datum' : 'Tijd',
    'Aantal afspraken',
    'Totaal',
    'Betaald',
    'Onbetaald'
  ]);

  if (periodTotals.size) {
    Array.from(periodTotals.entries())
      .sort(([a], [b]) => a.localeCompare(b, 'nl-BE'))
      .forEach(([, values]) => {
        rows.push([
          values.label,
          values.count,
          amountForCsv(values.total),
          amountForCsv(values.paid),
          amountForCsv(values.unpaid)
        ]);
      });
  } else {
    rows.push(['Geen gegevens', 0, amountForCsv(0), amountForCsv(0), amountForCsv(0)]);
  }

  rows.push([]);
  rows.push(['DETAIL AFSPRAKEN']);
  rows.push(['Datum', 'Tijd', 'Klant', 'Dienst', 'Prijs', 'Betaald', 'Betaalwijze', 'Status']);

  filtered.forEach(app => {
    const customer = customerById(data, app.customerId);
    const service = serviceById(data, app.serviceId);
    rows.push([
      app.date || '',
      app.time || '',
      customer ? fullName(customer) : 'Onbekend',
      service?.name || '',
      amountForCsv(app.price),
      app.paid ? 'Ja' : 'Nee',
      paymentMethodNameForAppointment(app, data) || '',
      app.status || ''
    ]);
  });

  const csv = rows
    .map(row => row.map(value => csvEscape(value)).join(';'))
    .join('\r\n');

  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${getRevenueExportTitle()}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}


function htmlEscape(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getRevenueReportData() {
  const data = getData();
  const filtered = revenueFilteredAppointments()
    .slice()
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));

  const paymentStatusFilter = document.getElementById('revenuePaymentStatusFilter')?.value || '';
  const paymentFilter = document.getElementById('revenuePaymentFilter')?.value || '';
  const periodType = document.getElementById('revenuePeriodType')?.value || 'day';
  const periodDate = document.getElementById('revenueDate')?.value || todayStr;

  const sumAmount = (items, predicate = () => true) => items
    .filter(predicate)
    .reduce((sum, app) => sum + Number(app.price || 0), 0);

  const paymentTotals = new Map();
  filtered.forEach(app => {
    const method = app.paid ? (paymentMethodNameForAppointment(app, data) || 'Onbekend') : 'Onbetaald';
    const current = paymentTotals.get(method) || { label: method, count: 0, total: 0, paid: 0, unpaid: 0 };
    current.count += 1;
    current.total += Number(app.price || 0);
    if (app.paid) current.paid += Number(app.price || 0);
    if (!app.paid) current.unpaid += Number(app.price || 0);
    paymentTotals.set(method, current);
  });

  const periodTotals = new Map();
  filtered.forEach(app => {
    let key = app.date || '';
    let label = app.date || '';

    if (periodType === 'year') {
      key = String(app.date || '').slice(0, 7);
      const monthNumber = Number(key.slice(5, 7));
      label = monthNumber ? `${getMonthNameLong(monthNumber - 1)} ${key.slice(0, 4)}` : key;
    } else if (periodType === 'month' || periodType === 'week') {
      label = app.date ? formatLongDate(app.date) : '';
    } else {
      label = app.time || app.date || '';
    }

    const current = periodTotals.get(key) || { label, count: 0, total: 0, paid: 0, unpaid: 0 };
    current.count += 1;
    current.total += Number(app.price || 0);
    if (app.paid) current.paid += Number(app.price || 0);
    if (!app.paid) current.unpaid += Number(app.price || 0);
    periodTotals.set(key, current);
  });

  const periodTitle =
    periodType === 'year' ? 'Totalen per maand' :
    periodType === 'month' ? 'Totalen per dag' :
    periodType === 'week' ? 'Totalen per dag' :
    'Totalen per afspraakmoment';

  const periodColumnTitle =
    periodType === 'year' ? 'Maand' :
    (periodType === 'month' || periodType === 'week') ? 'Datum' :
    'Tijd';

  let reportTitle = 'Omzetrapport';
  if (periodType === 'day') reportTitle = `Omzetrapport · ${formatLongDate(periodDate)}`;
  if (periodType === 'week') {
    const bounds = weekBounds(periodDate);
    reportTitle = `Omzetrapport · week ${formatLongDate(bounds.start)} t.e.m. ${formatLongDate(bounds.end)}`;
  }
  if (periodType === 'month') {
    const d = new Date(periodDate + 'T00:00:00');
    reportTitle = `Omzetrapport · ${getMonthNameLong(d.getMonth())} ${d.getFullYear()}`;
  }
  if (periodType === 'year') reportTitle = `Omzetrapport · ${periodDate.slice(0, 4)}`;

  return {
    data,
    filtered,
    paymentStatusFilter,
    paymentFilter,
    periodType,
    periodDate,
    reportTitle,
    totalRevenue: sumAmount(filtered),
    paidRevenue: sumAmount(filtered, app => app.paid),
    unpaidRevenue: sumAmount(filtered, app => !app.paid),
    paymentTotals: Array.from(paymentTotals.values()).sort((a, b) => a.label.localeCompare(b.label, 'nl-BE')),
    periodTotals: Array.from(periodTotals.entries()).sort(([a], [b]) => a.localeCompare(b, 'nl-BE')).map(([, values]) => values),
    periodTitle,
    periodColumnTitle
  };
}

function downloadRevenueStyledReport() {
  const report = getRevenueReportData();
  const createdAt = new Date().toLocaleString('nl-BE');
  const filterStatusLabel = report.paymentStatusFilter === 'paid' ? 'Betaald' : report.paymentStatusFilter === 'unpaid' ? 'Onbetaald' : 'Alle statussen';
  const filterPaymentLabel = report.paymentFilter || 'Alle betaalwijzen';

  const metricCard = (label, value) => `
    <article class="metric-card">
      <span>${htmlEscape(label)}</span>
      <strong>${htmlEscape(value)}</strong>
    </article>
  `;

  const moneyCells = item => `
    <td>${htmlEscape(item.count)}</td>
    <td class="money">${htmlEscape(euro(item.total))}</td>
    <td class="money paid">${htmlEscape(euro(item.paid))}</td>
    <td class="money unpaid">${htmlEscape(euro(item.unpaid))}</td>
  `;

  const paymentRows = report.paymentTotals.length
    ? report.paymentTotals.map(item => `<tr><td>${htmlEscape(item.label)}</td>${moneyCells(item)}</tr>`).join('')
    : `<tr><td>Geen gegevens</td><td>0</td><td class="money">${htmlEscape(euro(0))}</td><td class="money paid">${htmlEscape(euro(0))}</td><td class="money unpaid">${htmlEscape(euro(0))}</td></tr>`;

  const periodRows = report.periodTotals.length
    ? report.periodTotals.map(item => `<tr><td>${htmlEscape(item.label)}</td>${moneyCells(item)}</tr>`).join('')
    : `<tr><td>Geen gegevens</td><td>0</td><td class="money">${htmlEscape(euro(0))}</td><td class="money paid">${htmlEscape(euro(0))}</td><td class="money unpaid">${htmlEscape(euro(0))}</td></tr>`;

  const appointmentRows = report.filtered.length
    ? report.filtered.map(app => {
        const customer = customerById(report.data, app.customerId);
        const service = serviceById(report.data, app.serviceId);
        return `
          <tr>
            <td>${htmlEscape(app.date || '')}</td>
            <td>${htmlEscape(app.time || '')}</td>
            <td>${htmlEscape(customer ? fullName(customer) : 'Onbekend')}</td>
            <td>${htmlEscape(service?.name || '')}</td>
            <td class="money">${htmlEscape(euro(app.price))}</td>
            <td><span class="badge ${app.paid ? 'badge-paid' : 'badge-unpaid'}">${app.paid ? 'Betaald' : 'Onbetaald'}</span></td>
            <td>${htmlEscape(paymentMethodNameForAppointment(app, report.data) || '')}</td>
            <td>${htmlEscape(app.status || '')}</td>
          </tr>
        `;
      }).join('')
    : `<tr><td colspan="8" class="empty-row">Geen afspraken voor deze selectie.</td></tr>`;

  const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${htmlEscape(report.reportTitle)}</title>
  <style>
    :root {
      --bg: #fbf7f9;
      --card: #ffffff;
      --line: #eddfe6;
      --primary: #d991ab;
      --primary-dark: #b86d87;
      --primary-soft: #f8e8ee;
      --text: #4e4650;
      --muted: #8c838d;
      --success-bg: #e7f6ea;
      --success-text: #2d8b4e;
      --danger-soft: #fff1f5;
      --danger: #d46a8a;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: linear-gradient(180deg, #fff 0%, var(--bg) 100%);
      color: var(--text);
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.45;
    }
    .page {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
      padding: 34px 0 48px;
    }
    .report-header {
      background: linear-gradient(135deg, var(--primary-soft), #fff);
      border: 1px solid var(--line);
      border-radius: 28px;
      padding: 26px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(170, 120, 145, 0.10);
    }
    .eyebrow {
      margin: 0 0 6px;
      color: var(--primary-dark);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h1 {
      margin: 0;
      font-size: clamp(28px, 5vw, 46px);
      line-height: 1.05;
      color: var(--primary-dark);
    }
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 18px;
      color: var(--muted);
      font-size: 14px;
    }
    .meta span {
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: 8px 12px;
    }
    .metric-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 18px;
    }
    .metric-card,
    .report-section {
      background: var(--card);
      border: 1px solid var(--line);
      box-shadow: 0 10px 24px rgba(170, 120, 145, 0.09);
    }
    .metric-card {
      border-radius: 22px;
      padding: 18px;
    }
    .metric-card span {
      display: block;
      color: var(--muted);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .metric-card strong {
      font-size: 24px;
      color: var(--text);
    }
    .report-section {
      border-radius: 24px;
      overflow: hidden;
      margin-bottom: 18px;
    }
    .section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      background: var(--primary-soft);
      border-bottom: 1px solid var(--line);
      padding: 16px 18px;
    }
    .section-title h2 {
      margin: 0;
      color: var(--primary-dark);
      font-size: 18px;
    }
    .section-title span {
      color: var(--muted);
      font-size: 13px;
    }
    .table-wrap { overflow-x: auto; }
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 720px;
    }
    th,
    td {
      padding: 13px 16px;
      border-bottom: 1px solid #f2e8ed;
      text-align: left;
      vertical-align: top;
      font-size: 14px;
    }
    th {
      color: var(--muted);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      background: #fffafd;
    }
    tbody tr:nth-child(even) td { background: #fffbfd; }
    tbody tr:last-child td { border-bottom: none; }
    .money {
      text-align: right;
      white-space: nowrap;
      font-weight: 700;
    }
    .paid { color: var(--success-text); }
    .unpaid { color: var(--danger); }
    .badge {
      display: inline-flex;
      align-items: center;
      min-height: 28px;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 700;
      white-space: nowrap;
    }
    .badge-paid { background: var(--success-bg); color: var(--success-text); }
    .badge-unpaid { background: var(--danger-soft); color: var(--danger); }
    .empty-row {
      text-align: center;
      color: var(--muted);
      padding: 26px;
    }
    .print-actions {
      position: sticky;
      bottom: 18px;
      display: flex;
      justify-content: flex-end;
      pointer-events: none;
      margin-top: 20px;
    }
    .print-actions button {
      pointer-events: auto;
      border: none;
      border-radius: 999px;
      background: var(--primary-dark);
      color: #fff;
      min-height: 48px;
      padding: 0 18px;
      font-weight: 700;
      box-shadow: 0 12px 24px rgba(184, 109, 135, 0.22);
      cursor: pointer;
    }
    @media (max-width: 780px) {
      .page { width: min(100% - 18px, 1180px); padding-top: 12px; }
      .report-header { border-radius: 22px; padding: 20px; }
      .metric-grid { grid-template-columns: 1fr 1fr; }
      .metric-card strong { font-size: 20px; }
    }
    @media print {
      @page {
        size: A4 portrait;
        margin: 12mm;
      }

      html,
      body {
        width: 210mm;
        min-height: 297mm;
        background: #fff !important;
        color: #2f2a31;
        font-size: 10.5px;
        line-height: 1.28;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      .page {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .report-header {
        border-radius: 0;
        padding: 0 0 8mm;
        margin: 0 0 7mm;
        background: #fff !important;
        border: 0;
        border-bottom: 2px solid var(--primary);
      }

      .eyebrow {
        font-size: 9px;
        margin-bottom: 3px;
      }

      h1 {
        font-size: 22px;
        line-height: 1.12;
      }

      .meta {
        gap: 5px;
        margin-top: 6mm;
        font-size: 9.5px;
      }

      .meta span {
        padding: 4px 7px;
        border-radius: 999px;
      }

      .metric-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 4mm;
        margin-bottom: 6mm;
      }

      .metric-card,
      .report-section {
        box-shadow: none;
        break-inside: avoid;
        page-break-inside: avoid;
      }

      .metric-card {
        border-radius: 8px;
        padding: 4mm;
      }

      .metric-card span {
        font-size: 8px;
        margin-bottom: 3px;
      }

      .metric-card strong {
        font-size: 14px;
      }

      .report-section {
        border-radius: 8px;
        margin-bottom: 6mm;
        overflow: visible;
      }

      .section-title {
        padding: 4mm;
      }

      .section-title h2 {
        font-size: 13px;
      }

      .section-title span {
        font-size: 9px;
      }

      .table-wrap {
        overflow: visible;
      }

      table {
        width: 100%;
        min-width: 0;
        table-layout: fixed;
        page-break-inside: auto;
      }

      thead {
        display: table-header-group;
      }

      tr {
        page-break-inside: avoid;
        break-inside: avoid;
      }

      th,
      td {
        padding: 5px 6px;
        font-size: 8.7px;
        line-height: 1.25;
        overflow-wrap: anywhere;
        word-break: normal;
      }

      th {
        font-size: 7.8px;
      }

      .money {
        white-space: nowrap;
      }

      .badge {
        min-height: 0;
        padding: 2px 5px;
        font-size: 8px;
      }

      .print-actions {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <main class="page">
    <header class="report-header">
      <p class="eyebrow">NailBooker</p>
      <h1>${htmlEscape(report.reportTitle)}</h1>
      <div class="meta">
        <span>Gemaakt op ${htmlEscape(createdAt)}</span>
        <span>${htmlEscape(filterStatusLabel)}</span>
        <span>${htmlEscape(filterPaymentLabel)}</span>
      </div>
    </header>

    <section class="metric-grid">
      ${metricCard('Aantal afspraken', report.filtered.length)}
      ${metricCard('Som totaal', euro(report.totalRevenue))}
      ${metricCard('Betaald', euro(report.paidRevenue))}
      ${metricCard('Onbetaald', euro(report.unpaidRevenue))}
    </section>

    <section class="report-section">
      <div class="section-title"><h2>${htmlEscape(report.periodTitle)}</h2><span>${htmlEscape(report.periodColumnTitle)}</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>${htmlEscape(report.periodColumnTitle)}</th><th>Aantal</th><th class="money">Totaal</th><th class="money">Betaald</th><th class="money">Onbetaald</th></tr></thead>
          <tbody>${periodRows}</tbody>
        </table>
      </div>
    </section>

    <section class="report-section">
      <div class="section-title"><h2>Totalen per betaalwijze</h2><span>Betaaloverzicht</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Betaalwijze</th><th>Aantal</th><th class="money">Totaal</th><th class="money">Betaald</th><th class="money">Onbetaald</th></tr></thead>
          <tbody>${paymentRows}</tbody>
        </table>
      </div>
    </section>

    <section class="report-section">
      <div class="section-title"><h2>Detail afspraken</h2><span>${report.filtered.length} afspraken</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Datum</th><th>Tijd</th><th>Klant</th><th>Dienst</th><th class="money">Prijs</th><th>Status</th><th>Betaalwijze</th><th>Afspraakstatus</th></tr></thead>
          <tbody>${appointmentRows}</tbody>
        </table>
      </div>
    </section>

    <div class="print-actions">
      <button type="button" onclick="window.print()">Printen / bewaren als PDF</button>
    </div>
  </main>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${getRevenueExportTitle()}_rapport.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}


function groupRevenueByCurrency(items, predicate = () => true) {
  return items.filter(predicate).reduce((map, app) => {
    const currency = normalizeCurrency(app.currency || getCurrentCurrency());
    map[currency] = (map[currency] || 0) + Number(app.price || 0);
    return map;
  }, {});
}

function formatCurrencyTotals(totals) {
  const entries = Object.entries(totals || {}).filter(([, value]) => Number(value || 0) !== 0);
  if (!entries.length) return euro(0);
  return entries.map(([currency, value]) => euro(value, currency)).join(" + ");
}

function renderRevenue() {
  renderRevenueFilters();
  syncRevenuePeriodChips();

  const data = getData();
  const methodList = document.getElementById("paymentMethodList");
  const type = document.getElementById("revenuePeriodType").value;
  const anchor = document.getElementById("revenueDate").value || todayStr;
  const filtered = revenueFilteredAppointments();

  let title = t("revenue");
  if (type === "day") title = `${t("revenueOn")} ${formatLongDate(anchor)}`;
  if (type === "week") {
    const bounds = weekBounds(anchor);
    title = `${t("revenue")} ${formatLongDate(bounds.start)} - ${formatLongDate(bounds.end)}`;
  }
  if (type === "month") {
    const d = new Date(anchor + "T00:00:00");
    title = `${t("revenue")} ${getMonthNameLong(d.getMonth())} ${d.getFullYear()}`;
  }
  if (type === "year") title = `${t("revenue")} ${anchor.slice(0, 4)}`;

  const titleEl = document.getElementById("revenueTitle");
  if (titleEl) titleEl.textContent = title;

  const paid = groupRevenueByCurrency(filtered, a => a.paid);
  const total = groupRevenueByCurrency(filtered);
  const open = groupRevenueByCurrency(filtered, a => !a.paid);
  const totalNumeric = filtered.reduce((sum, a) => sum + Number(a.price || 0), 0);

  document.getElementById("plannedRevenue").textContent = formatCurrencyTotals(total);
  document.getElementById("paidRevenue").textContent = formatCurrencyTotals(paid);
  document.getElementById("openRevenue").textContent = formatCurrencyTotals(open);

  const byMethod = {};
  filtered.filter(a => a.paid).forEach(a => {
    const key = paymentMethodNameForAppointment(a, data) || t("unknown");
    const currency = normalizeCurrency(a.currency || getCurrentCurrency());
    byMethod[key] = byMethod[key] || {};
    byMethod[key][currency] = (byMethod[key][currency] || 0) + Number(a.price || 0);
  });

  if (methodList) {
    const methodNames = Object.keys(byMethod).sort((a, b) => a.localeCompare(b, "nl-BE"));
    methodList.innerHTML = totalNumeric > 0 && methodNames.length
      ? `
          <h3 class="revenue-method-title">${t("paymentMethodTitle")}</h3>
          ${methodNames.map(method => `
            <div class="revenue-method-row">
              <span>${method}:</span>
              <strong>${formatCurrencyTotals(byMethod[method])}</strong>
            </div>
          `).join("")}
        `
      : "";
  }


  renderRevenueChart(filtered, type, anchor);
}

function getStatisticsSummary(data = getData()) {
  const customers = Array.isArray(data.customers) ? data.customers : [];
  const services = Array.isArray(data.services) ? data.services : [];
  const appointments = Array.isArray(data.appointments) ? data.appointments : [];

  const paidAppointments = appointments.filter(app => app.paid);
  const paidRevenue = paidAppointments.reduce((sum, app) => sum + Number(app.price || 0), 0);
  const now = new Date();
  const appointmentDateTime = app => new Date(`${app.date || todayStr}T${app.time || '00:00'}:00`);
  const pastAppointments = appointments.filter(app => appointmentDateTime(app).getTime() < now.getTime());
  const futureAppointments = appointments.filter(app => appointmentDateTime(app).getTime() >= now.getTime());
  const paidRevenueUntilToday = paidAppointments
    .filter(app => String(app.date || '') <= todayStr)
    .reduce((sum, app) => sum + Number(app.price || 0), 0);

  const serviceUsage = services.map(service => ({
    label: service.name,
    value: appointments.filter(app => String(app.serviceId) === String(service.id)).length
  })).filter(item => item.value > 0).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label, 'nl-BE'));

  const paymentUsageMap = {};
  paidAppointments.forEach(app => {
    const label = paymentMethodNameForAppointment(app, data) || 'Onbekend';
    paymentUsageMap[label] = (paymentUsageMap[label] || 0) + 1;
  });
  const paymentUsage = Object.entries(paymentUsageMap).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label, 'nl-BE'));

  const statusMap = {};
  appointments.forEach(app => {
    const label = String(app.status || 'Onbekend').trim() || 'Onbekend';
    statusMap[label] = (statusMap[label] || 0) + 1;
  });
  const statusUsage = Object.entries(statusMap).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label, 'nl-BE'));

  const revenueByServiceMap = {};
  paidAppointments.forEach(app => {
    const service = services.find(item => String(item.id) === String(app.serviceId));
    const label = service?.name || 'Onbekende dienst';
    revenueByServiceMap[label] = (revenueByServiceMap[label] || 0) + Number(app.price || 0);
  });
  const revenueByService = Object.entries(revenueByServiceMap).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label, 'nl-BE'));

  return {
    appointmentCount: appointments.length,
    customerCount: customers.length,
    pastAppointmentCount: pastAppointments.length,
    futureAppointmentCount: futureAppointments.length,
    paidAppointmentCount: paidAppointments.length,
    paidRevenue,
    paidRevenueUntilToday,
    serviceUsage,
    paymentUsage,
    statusUsage,
    revenueByService
  };
}

function buildStatisticsDonut(items, valueFormatter = value => String(value)) {
  const safeItems = Array.isArray(items) ? items.filter(item => Number(item.value) > 0) : [];
  const total = safeItems.reduce((sum, item) => sum + Number(item.value || 0), 0);

  if (!safeItems.length || total <= 0) {
    return `
      <div class="statistics-empty">Nog geen gegevens beschikbaar.</div>
    `;
  }

  const palette = ['#d991ab', '#b86d87', '#f1bfd0', '#8c838d', '#df9db3', '#f8e8ee', '#c97b97', '#b3a1ac'];
  const center = 100;
  const radius = 90;
  const innerRadius = 42;

  const polarToCartesian = (cx, cy, r, angleDeg) => {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + (r * Math.cos(angleRad)),
      y: cy + (r * Math.sin(angleRad))
    };
  };

  const describeArcSlice = (cx, cy, outerR, innerR, startAngle, endAngle) => {
    const outerStart = polarToCartesian(cx, cy, outerR, endAngle);
    const outerEnd = polarToCartesian(cx, cy, outerR, startAngle);
    const innerStart = polarToCartesian(cx, cy, innerR, startAngle);
    const innerEnd = polarToCartesian(cx, cy, innerR, endAngle);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${outerR} ${outerR} 0 ${largeArcFlag} 0 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerStart.x} ${innerStart.y}`,
      `A ${innerR} ${innerR} 0 ${largeArcFlag} 1 ${innerEnd.x} ${innerEnd.y}`,
      'Z'
    ].join(' ');
  };

  let currentAngle = 0;
  const slices = safeItems.map((item, index) => {
    const value = Number(item.value || 0);
    const percentage = (value / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    return {
      ...item,
      color: palette[index % palette.length],
      percentage,
      path: describeArcSlice(center, center, radius, innerRadius, startAngle, endAngle)
    };
  });

  return `
    <div class="statistics-chart-layout">
      <div class="statistics-donut-wrap">
        <svg class="statistics-donut-svg" viewBox="0 0 200 200" aria-hidden="true">
          ${slices.map(slice => `<path d="${slice.path}" fill="${slice.color}"></path>`).join('')}
        </svg>
        <div class="statistics-donut-hole">${valueFormatter(total)}</div>
      </div>
      <div class="statistics-legend statistics-legend-table" role="table" aria-label="Overzicht diagramgegevens">
        ${safeItems.map((item, index) => {
          const percentage = total > 0 ? (Number(item.value || 0) / total) * 100 : 0;
          return `
            <div class="statistics-legend-row" role="row">
              <span class="statistics-legend-label" role="cell">
                <i style="background:${palette[index % palette.length]}"></i>${item.label}
              </span>
              <strong class="statistics-legend-value" role="cell">${valueFormatter(item.value)}</strong>
              <span class="statistics-legend-percentage" role="cell">${Math.round(percentage)}%</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function getStatisticsAppointmentYears(data = getData()) {
  return Array.from(new Set((data.appointments || [])
    .map(appointment => Number(String(appointment.date || "").slice(0, 4)))
    .filter(year => Number.isFinite(year) && year > 0)))
    .sort((a, b) => b - a);
}

function getTopCustomers(data = getData(), yearFilter = "all") {
  const totals = new Map();
  const safeYearFilter = String(yearFilter || "all");

  (data.customers || []).forEach(customer => {
    const name = fullName(customer) || 'Onbekend';
    totals.set(String(customer.id), {
      id: customer.id,
      name,
      revenue: 0,
      appointments: 0,
      paidAppointments: 0
    });
  });

  (data.appointments || []).forEach(appointment => {
    if ((appointment.status || '').toLowerCase() === 'no-show') return;
    if (safeYearFilter !== 'all' && !String(appointment.date || '').startsWith(safeYearFilter)) return;
    const customer = customerById(data, appointment.customerId);
    const key = customer ? String(customer.id) : `unknown-${appointment.customerId || appointment.id}`;
    const name = customer ? fullName(customer) : 'Onbekend';
    const current = totals.get(key) || { id: appointment.customerId || null, name, revenue: 0, appointments: 0, paidAppointments: 0 };
    current.appointments += 1;
    if (appointment.paid) {
      current.paidAppointments += 1;
      current.revenue += Number(appointment.price || 0);
    }
    totals.set(key, current);
  });

  return Array.from(totals.values())
    .sort((a, b) => (b.revenue - a.revenue) || (b.paidAppointments - a.paidAppointments) || (b.appointments - a.appointments) || a.name.localeCompare(b.name, 'nl-BE'));
}

function renderStatistics() {
  const wrap = document.getElementById('statisticsOverview');
  if (!wrap) return;

  const data = getData();
  const summary = getStatisticsSummary(data);
  const topCustomerYears = getStatisticsAppointmentYears(data);
  if (state.statsTopCustomersYear !== 'all' && !topCustomerYears.includes(Number(state.statsTopCustomersYear))) {
    state.statsTopCustomersYear = 'all';
  }
  const selectedTopCustomerYear = state.statsTopCustomersYear || 'all';
  const topCustomers = getTopCustomers(data, selectedTopCustomerYear);
  const visibleCount = Math.max(10, Number(state.statsTopCustomersVisible) || 10);
  const visibleCustomers = topCustomers.slice(0, visibleCount);
  const hasMoreCustomers = visibleCustomers.length < topCustomers.length;
  const canShowLessCustomers = visibleCount > 10 && topCustomers.length > 10;

  wrap.innerHTML = `
    <section class="statistics-card statistics-kpi-grid">
      <div class="statistics-kpi">
        <span class="statistics-kpi-label">${t("customerCount")}</span>
        <strong>${summary.customerCount}</strong>
      </div>
      <div class="statistics-kpi">
        <span class="statistics-kpi-label">${t("pastAppointments")}</span>
        <strong>${summary.pastAppointmentCount}</strong>
      </div>
      <div class="statistics-kpi">
        <span class="statistics-kpi-label">${t("futureAppointments")}</span>
        <strong>${summary.futureAppointmentCount}</strong>
      </div>
      <div class="statistics-kpi">
        <span class="statistics-kpi-label">${t("totalRevenueUntilToday")}</span>
        <strong>${euro(summary.paidRevenueUntilToday)}</strong>
      </div>
    </section>

    <section class="statistics-card">
      <div class="statistics-card-head">
        <h2>${t("chosenServices")}</h2>
      </div>
      ${buildStatisticsDonut(summary.serviceUsage)}
    </section>

    <section class="statistics-card">
      <div class="statistics-card-head">
        <h2>${t("revenueByService")}</h2>
      </div>
      ${buildStatisticsDonut(summary.revenueByService, value => euro(value))}
    </section>

    <section class="statistics-card">
      <div class="statistics-card-head">
        <h2>${t("chosenPaymentMethod")}</h2>
      </div>
      ${buildStatisticsDonut(summary.paymentUsage)}
    </section>

    <section class="statistics-card">
      <div class="statistics-card-head statistics-card-head-stacked">
        <h2>${t("topCustomers")}</h2>
        <select id="topCustomersYearFilter" class="field compact-field statistics-year-filter" aria-label="Top klanten jaar filteren">
          <option value="all"${selectedTopCustomerYear === 'all' ? ' selected' : ''}>${t("all")}</option>
          ${topCustomerYears.map(year => `<option value="${year}"${String(year) === String(selectedTopCustomerYear) ? ' selected' : ''}>${year}</option>`).join('')}
        </select>
      </div>
      <div class="statistics-top-customers">
        ${visibleCustomers.length ? visibleCustomers.map((customer, index) => `
          <button class="statistics-top-customer-row" type="button" data-customer-id="${customer.id || ''}">
            <div class="statistics-top-customer-rank">${index + 1}</div>
            <div class="statistics-top-customer-name">${customer.name}</div>
            <strong class="statistics-top-customer-amount">${euro(customer.revenue)}</strong>
          </button>
        `).join('') : `<div class="statistics-empty">${t("noCustomerStats")}</div>`}
      </div>
      ${(hasMoreCustomers || canShowLessCustomers) ? `
        <div class="statistics-more-wrap">
          ${hasMoreCustomers ? `<button id="statisticsMoreCustomersBtn" class="btn btn-secondary statistics-more-btn" type="button">${t("more")}</button>` : ''}
          ${canShowLessCustomers ? `<button id="statisticsLessCustomersBtn" class="btn btn-secondary statistics-more-btn" type="button">${t("less")}</button>` : ''}
        </div>
      ` : ''}
    </section>
  `;


  const topCustomersYearFilter = document.getElementById('topCustomersYearFilter');
  if (topCustomersYearFilter) {
    topCustomersYearFilter.addEventListener('change', () => {
      state.statsTopCustomersYear = topCustomersYearFilter.value || 'all';
      state.statsTopCustomersVisible = 10;
      renderStatistics();
    });
  }

  wrap.querySelectorAll('.statistics-top-customer-row[data-customer-id]').forEach(row => {
    row.addEventListener('click', () => {
      const customerId = row.dataset.customerId;
      if (customerId) openClientDetail(customerId);
    });
  });

  const moreBtn = document.getElementById('statisticsMoreCustomersBtn');
  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      state.statsTopCustomersVisible = Math.min(topCustomers.length, visibleCount + 10);
      renderStatistics();
    });
  }

  const lessBtn = document.getElementById('statisticsLessCustomersBtn');
  if (lessBtn) {
    lessBtn.addEventListener('click', () => {
      state.statsTopCustomersVisible = Math.max(10, visibleCount - 10);
      renderStatistics();
    });
  }
}

function notificationsSupported() {
  return typeof window !== 'undefined' && 'Notification' in window;
}

function notificationsPermissionState() {
  if (!notificationsSupported()) return 'unsupported';
  return Notification.permission;
}

async function requestNotificationPermissionIfNeeded() {
  if (!notificationsSupported()) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied') return 'denied';
  try {
    return await Notification.requestPermission();
  } catch (error) {
    console.error('Fout bij vragen meldingsrechten:', error);
    return Notification.permission || 'default';
  }
}

function clearScheduledNotifications() {
  notificationTimers.forEach(timerId => window.clearTimeout(timerId));
  notificationTimers.clear();
  if (notificationHeartbeatId) {
    window.clearInterval(notificationHeartbeatId);
    notificationHeartbeatId = null;
  }
}

function reminderStorageKey(appointment, reminderMinutes) {
  return `nailbooker-reminder-${appointment.id}-${appointment.date}-${appointment.time}-${reminderMinutes}`;
}

function appointmentReminderDueAt(appointment, reminderMinutes) {
  const appointmentAt = new Date(`${appointment.date}T${appointment.time || '00:00'}:00`).getTime();
  return appointmentAt - (Math.max(0, Number(reminderMinutes) || 0) * 60 * 1000);
}

async function showAppointmentNotification(appointment) {
  const data = getData();
  const customer = customerById(data, appointment.customerId);
  const service = serviceById(data, appointment.serviceId);
  const title = customer ? fullName(customer) : 'Aankomende afspraak';
  const body = [service?.name || 'Afspraak', `${formatLongDate(appointment.date)} om ${appointment.time}`].filter(Boolean).join(' · ');
  const options = {
    body,
    tag: `appointment-${appointment.id}`,
    renotify: false,
    badge: 'icons/icon-192.png',
    icon: 'icons/icon-192.png',
    data: { appointmentId: appointment.id, screen: 'agendaScreen', date: appointment.date }
  };

  try {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      await registration.showNotification(title, options);
      return true;
    }
  } catch (error) {
    console.warn('Service worker melding mislukt, fallback naar Notification:', error);
  }

  if (notificationsSupported() && Notification.permission === 'granted') {
    new Notification(title, options);
    return true;
  }

  return false;
}

async function triggerDueAppointmentNotifications() {
  const settings = getSettings();
  if (!settings.notificationsEnabled || notificationsPermissionState() !== 'granted') return;

  const now = Date.now();
  const appointments = getData().appointments
    .filter(app => (app.status || '').toLowerCase() !== 'no-show')
    .filter(app => new Date(`${app.date}T${app.time || '00:00'}:00`).getTime() > now);

  for (const appointment of appointments) {
    const dueAt = appointmentReminderDueAt(appointment, settings.reminderMinutes);
    const appointmentAt = new Date(`${appointment.date}T${appointment.time || '00:00'}:00`).getTime();
    const storageKey = reminderStorageKey(appointment, settings.reminderMinutes);
    if (localStorage.getItem(storageKey)) continue;
    if (now >= dueAt && now < appointmentAt) {
      const shown = await showAppointmentNotification(appointment);
      if (shown) {
        localStorage.setItem(storageKey, String(Date.now()));
      }
    }
  }
}

async function scheduleAppointmentNotifications() {
  clearScheduledNotifications();

  const settings = getSettings();
  if (!settings.notificationsEnabled) return;
  if (notificationsPermissionState() !== 'granted') return;

  const now = Date.now();
  const appointments = getData().appointments
    .filter(app => (app.status || '').toLowerCase() !== 'no-show')
    .filter(app => new Date(`${app.date}T${app.time || '00:00'}:00`).getTime() > now)
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));

  appointments.forEach(appointment => {
    const dueAt = appointmentReminderDueAt(appointment, settings.reminderMinutes);
    const delay = dueAt - now;
    const storageKey = reminderStorageKey(appointment, settings.reminderMinutes);
    if (localStorage.getItem(storageKey)) return;
    if (delay <= 0 || delay > 2147483647) return;

    const timerId = window.setTimeout(async () => {
      const shown = await showAppointmentNotification(appointment);
      if (shown) {
        localStorage.setItem(storageKey, String(Date.now()));
      }
      notificationTimers.delete(storageKey);
    }, delay);

    notificationTimers.set(storageKey, timerId);
  });

  await triggerDueAppointmentNotifications();
  notificationHeartbeatId = window.setInterval(() => {
    triggerDueAppointmentNotifications();
  }, 60000);
}

async function syncNotificationState(options = {}) {
  const { requestPermission = false } = options;
  const settings = getSettings();
  if (!settings.notificationsEnabled) {
    clearScheduledNotifications();
    return true;
  }

  const permission = requestPermission
    ? await requestNotificationPermissionIfNeeded()
    : notificationsPermissionState();

  if (permission !== 'granted') {
    clearScheduledNotifications();
    return false;
  }

  await scheduleAppointmentNotifications();
  return true;
}

function renderSettings() {
  const settings = getSettings();

  const breakInput = document.getElementById("settingsDefaultBreakMinutes");
  const notificationsToggle = document.getElementById("settingsNotificationsEnabled");
  const reminderSelect = document.getElementById("settingsReminderMinutes");
  const overlapToggle = document.getElementById("settingsOverlapWarningsEnabled");
  const reminderWrap = document.getElementById("settingsReminderWrap");
  const saveHint = document.getElementById("settingsSaveHint");
  const languageSelect = document.getElementById("settingsLanguage");
  const currencySelect = document.getElementById("settingsCurrency");

  if (languageSelect) languageSelect.innerHTML = buildLanguageOptions(getCurrentLanguage());
  if (currencySelect) currencySelect.innerHTML = buildCurrencyOptions(getCurrentCurrency());

  if (!breakInput || !notificationsToggle || !reminderSelect || !overlapToggle || !reminderWrap || !saveHint) return;

  breakInput.value = Number(settings.defaultBreakMinutes || 0);
  notificationsToggle.checked = Boolean(settings.notificationsEnabled);
  reminderSelect.value = String(settings.reminderMinutes || 30);
  overlapToggle.checked = settings.overlapWarningsEnabled !== false;
  const notificationsEnabled = Boolean(settings.notificationsEnabled);
  const permissionState = notificationsPermissionState();

  reminderWrap.classList.toggle("hidden", !notificationsEnabled);

  if (state.settingsSavePending) {
    saveHint.textContent = t("savePending");
  } else if (!notificationsEnabled) {
    saveHint.textContent = t("notificationsOff");
  } else if (permissionState === "granted") {
    saveHint.textContent = t("notificationsActive");
  } else if (permissionState === "denied") {
    saveHint.textContent = t("notificationsBlocked");
  } else if (permissionState === "unsupported") {
    saveHint.textContent = t("notificationsUnsupported");
  } else {
    saveHint.textContent = t("notificationsPermissionHint");
  }
}


async function loadSettingsFromSupabase() {
  const user = await getCurrentUser();
  if (!user) return getDefaultSettings();

  const { data, error } = await supabaseClient
    .from("user_settings")
    .select("default_break_minutes, notifications_enabled, reminder_minutes, overlap_warnings_enabled, language, currency")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.error("Fout bij laden instellingen:", error.message);
    return getDefaultSettings();
  }

  return {
    defaultBreakMinutes: Number(data?.default_break_minutes ?? 10),
    notificationsEnabled: Boolean(data?.notifications_enabled ?? false),
    reminderMinutes: Number(data?.reminder_minutes ?? 30),
    overlapWarningsEnabled: data?.overlap_warnings_enabled !== false,
    language: normalizeLanguage(data?.language || DEFAULT_LANGUAGE),
    currency: normalizeCurrency(data?.currency || DEFAULT_CURRENCY)
  };
}

async function saveSettingsFromForm(event) {
  if (event) event.preventDefault();

  const settings = {
    defaultBreakMinutes: Math.max(0, Number(document.getElementById("settingsDefaultBreakMinutes")?.value || 0)),
    notificationsEnabled: Boolean(document.getElementById("settingsNotificationsEnabled")?.checked),
    reminderMinutes: Number(document.getElementById("settingsReminderMinutes")?.value || 30),
    overlapWarningsEnabled: Boolean(document.getElementById("settingsOverlapWarningsEnabled")?.checked),
    language: normalizeLanguage(document.getElementById("settingsLanguage")?.value || getCurrentLanguage()),
    currency: normalizeCurrency(document.getElementById("settingsCurrency")?.value || getCurrentCurrency())
  };

  const user = await getCurrentUser();

  if (!user) {
    const data = getData();
    data.settings = settings;
    currentProfilePreferences = { language: settings.language, currency: settings.currency };
    saveData(data);
    state.settingsSavePending = false;
    await syncNotificationState({ requestPermission: settings.notificationsEnabled });
    rerenderAll();
    await appAlert(t("settingsSavedDevice"), { title: t("settingsSaved"), variant: "success" });
    return;
  }

  state.settingsSavePending = true;
  renderSettings();

  const payload = {
    user_id: user.id,
    default_break_minutes: settings.defaultBreakMinutes,
    notifications_enabled: settings.notificationsEnabled,
    reminder_minutes: settings.reminderMinutes,
    overlap_warnings_enabled: settings.overlapWarningsEnabled,
    language: settings.language,
    currency: settings.currency,
    updated_at: new Date().toISOString()
  };

  await upsertProfile(user.id, {
    ...(await getCurrentProfile() || {}),
    language: settings.language,
    currency: settings.currency,
    terms_accepted: true
  });

  const { error } = await supabaseClient
    .from("user_settings")
    .upsert(payload, { onConflict: "user_id" });

  state.settingsSavePending = false;

  if (error) {
    renderSettings();
    await appAlert("Opslaan instellingen mislukt: " + error.message, { title: "Opslaan mislukt", variant: "danger" });
    return;
  }

  const data = getData();
  data.settings = settings;
  currentProfilePreferences = { language: settings.language, currency: settings.currency };
  saveData(data);
  await syncNotificationState({ requestPermission: settings.notificationsEnabled });
  rerenderAll();
  await appAlert(t("settingsSaved"), { title: t("settingsSaved"), variant: "success" });
}

// =============================
// CLIENT DETAIL SCREEN UPDATE
// =============================


function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizePhoneHref(phone) {
  return String(phone || '').replace(/[^+\d]/g, '');
}

function updateClientActionBar(client = null) {
  const bar = document.getElementById('clientActionBar');
  const callBtn = document.getElementById('clientActionCall');
  const smsBtn = document.getElementById('clientActionSms');
  const emailBtn = document.getElementById('clientActionEmail');

  if (!bar || !callBtn || !smsBtn || !emailBtn) return;

  const phoneValue = normalizePhoneHref(client?.phone || '');
  const emailValue = String(client?.email || '').trim();

  const hasPhone = Boolean(phoneValue);
  const hasEmail = Boolean(emailValue);
  const shouldShowBar = state.currentScreen === 'clientDetailScreen' && (hasPhone || hasEmail);

  callBtn.classList.toggle('hidden', !hasPhone);
  smsBtn.classList.toggle('hidden', !hasPhone);
  emailBtn.classList.toggle('hidden', !hasEmail);

  if (hasPhone) {
    callBtn.href = `tel:${phoneValue}`;
    callBtn.setAttribute('aria-label', `Bel ${client.phone || phoneValue}`);
    callBtn.title = `Bel ${client.phone || phoneValue}`;

    smsBtn.href = `sms:${phoneValue}`;
    smsBtn.setAttribute('aria-label', `Stuur sms naar ${client.phone || phoneValue}`);
    smsBtn.title = `Stuur sms naar ${client.phone || phoneValue}`;
  } else {
    callBtn.removeAttribute('href');
    smsBtn.removeAttribute('href');
  }

  if (hasEmail) {
    emailBtn.href = `mailto:${emailValue}`;
    emailBtn.setAttribute('aria-label', `Mail naar ${emailValue}`);
    emailBtn.title = `Mail naar ${emailValue}`;
  } else {
    emailBtn.removeAttribute('href');
  }

  bar.classList.toggle('hidden', !shouldShowBar);
}

function renderClientContactValue(type, value) {
  const safeValue = String(value || '').trim();
  if (!safeValue) return `<div class="client-detail-value">-</div>`;
  return `<div class="client-detail-value">${escapeHtml(safeValue)}</div>`;
}

function openClientDetail(clientId) {
  state.selectedClientId = clientId;

  const data = getData();
  const client = customerById(data, clientId);
  const content = document.getElementById("clientDetailContent");

  if (!client || !content) return;

  const appts = data.appointments
    .filter(a => String(a.customerId) === String(clientId))
    .sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));

  const safeNote = escapeHtml(client.note || '-').replace(/\n/g, '<br>');

  content.innerHTML = `
    <div class="client-detail-page">

      <div class="client-detail-card">
        <div class="client-detail-table">
          <div class="client-detail-row client-detail-row-stacked">
            <div class="client-detail-label">${t("customerNumber")}</div>
            ${renderClientContactValue('text', customerNumber(client))}
          </div>

          <div class="client-detail-row client-detail-row-stacked">
            <div class="client-detail-label">${t("firstName")}</div>
            ${renderClientContactValue('text', client.firstName || '-')}
          </div>

          <div class="client-detail-row client-detail-row-stacked">
            <div class="client-detail-label">${t("lastName")}</div>
            ${renderClientContactValue('text', client.lastName || '-')}
          </div>

          <div class="client-detail-row client-detail-row-stacked">
            <div class="client-detail-label">${t("phone")}</div>
            ${renderClientContactValue('phone', client.phone || '')}
          </div>

          <div class="client-detail-row client-detail-row-stacked">
            <div class="client-detail-label">${t("email")}</div>
            ${renderClientContactValue('email', client.email || '')}
          </div>

          <div class="client-detail-note-block">
            <div class="client-detail-label">${t("note")}</div>
            <div class="client-detail-note">${safeNote}</div>
          </div>
        </div>

        <div class="client-detail-footer">
          <button class="btn client-detail-edit-btn app-action-nav-btn" id="editClientBtn" type="button" aria-label="${t("edit")}">
            <span class="app-action-nav-ico" aria-hidden="true">${getActionButtonIconSvg('edit')}</span>
            <span class="app-action-nav-label">${t("edit")}</span>
          </button>
        </div>
      </div>

      <div class="client-appointments-section">
        <div class="client-appointments-header">
          <div class="client-appointments-title">${t("appointments").toUpperCase()}</div>
          <div class="client-appointments-count">${appts.length} ${t("totalLower")}</div>
        </div>

        <div class="client-new-appointment-bar">
          <button
            class="client-inline-add-btn"
            id="newClientAppointmentBtn"
            type="button"
            aria-label="${t("newAppointment")}"
            title="${t("newAppointment")}"
          >
            +
          </button>
        </div>

        <div class="client-appointments-list">
          ${
            appts.length
              ? `<div class="appointment-card client-detail-appointment-card">${appts.map(app => {
                  const service = serviceById(data, app.serviceId);
                  const statusParts = [];
                  if ((app.status || "").toLowerCase() === "no-show") {
                    statusParts.push("no show");
                  } else {
                    statusParts.push(app.paid ? t("paid").toLowerCase() : t("unpaid").toLowerCase());
                    const method = paymentMethodNameForAppointment(app, data);
                    if (app.paid && method) statusParts.push(method);
                  }

                  return `
                    <div class="appointment-row client-detail-appointment-row" data-id="${app.id}" role="button" tabindex="0" aria-label="${t("editAppointment")}">
                      <div class="time-block">
                        <div class="time">${app.time || ""}</div>
                        <div class="time-end">${formatShortDate(app.date)}</div>
                      </div>
                      <div>
                        <div class="main-name">${service ? service.name : "-"}</div>
                        <div class="meta">${statusParts.join(" · ")}</div>
                      </div>
                      <span class="price-chip ${app.paid ? "paid" : ""}">${euro(app.price)}</span>
                    </div>
                  `;
                }).join("")}</div>`
              : `<div class="client-appointment-empty">${t("noAppointmentsYet")}</div>`
          }
        </div>

      </div>

    </div>
  `;

  const editClientBtn = document.getElementById("editClientBtn");
  if (editClientBtn) {
    editClientBtn.addEventListener("click", () => {
      openEditClientDialog(clientId);
    });
  }

  const newClientAppointmentBtn = document.getElementById("newClientAppointmentBtn");
  if (newClientAppointmentBtn) {
    newClientAppointmentBtn.addEventListener("click", () => {
      openNewAppointmentDialog(clientId);
    });
  }

  content.querySelectorAll(".client-detail-appointment-row").forEach(row => {
    const openAppointment = () => openEditAppointmentDialog(row.dataset.id);
    row.addEventListener("click", openAppointment);
    row.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openAppointment();
      }
    });
  });

  switchScreen("clientDetailScreen", "Klant");
  updateClientActionBar(client);
}

// =============================
// HELPERS (ongewijzigd gedrag)
// =============================

function createAppointmentForClient(clientId) {
  openNewAppointment(clientId);
}


function customerSearchText(customer) {
  return [
    fullName(customer),
    customer.firstName,
    customer.lastName,
    customer.phone,
    String(customer.phone || "").replace(/\D/g, ""),
    customer.email,
    customerNumber(customer)
  ].join(" ").toLowerCase();
}

function setAppointmentCustomer(customerId, { updateSearch = true } = {}) {
  const data = getData();
  const customerSelect = document.getElementById("appointmentCustomer");
  const searchInput = document.getElementById("appointmentCustomerSearch");
  const customer = customerById(data, customerId);

  if (customerSelect) {
    customerSelect.value = customer ? String(customer.id) : "";
  }

  if (searchInput && updateSearch) {
    searchInput.value = customer ? fullName(customer) : "";
  }

  renderAppointmentCustomerResults(searchInput?.value || "", false);
}

function renderAppointmentCustomerResults(query = "", showAllWhenEmpty = false) {
  const data = getData();
  const resultsWrap = document.getElementById("appointmentCustomerResults");
  const searchInput = document.getElementById("appointmentCustomerSearch");
  if (!resultsWrap) return;

  const safeQuery = String(query || "").trim().toLowerCase();
  const selectedId = document.getElementById("appointmentCustomer")?.value || "";

  let customers = data.customers.slice().sort((a, b) => fullName(a).localeCompare(fullName(b), "nl-BE"));
  if (safeQuery) {
    customers = customers.filter(customer => customerSearchText(customer).includes(safeQuery));
  } else if (!showAllWhenEmpty) {
    customers = [];
  }

  customers = customers.slice(0, 30);

  if (!customers.length) {
    resultsWrap.innerHTML = safeQuery
      ? `<div class="appointment-customer-empty">${t("noClientsFound")}</div>`
      : "";
    resultsWrap.classList.toggle("hidden", !safeQuery);
    if (searchInput) searchInput.setAttribute("aria-expanded", safeQuery ? "true" : "false");
    return;
  }

  resultsWrap.innerHTML = customers.map(customer => {
    const name = fullName(customer) || "Naamloos";
    const meta = [customer.phone, customer.email].filter(Boolean).join(" · ");
    const activeClass = String(customer.id) === String(selectedId) ? " active" : "";
    return `
      <button class="appointment-customer-result${activeClass}" type="button" role="option" data-customer-id="${customer.id}" aria-selected="${activeClass ? "true" : "false"}">
        <span class="appointment-customer-result-name">${name}</span>
        ${meta ? `<span class="appointment-customer-result-meta">${meta}</span>` : ""}
      </button>
    `;
  }).join("");

  resultsWrap.classList.remove("hidden");
  if (searchInput) searchInput.setAttribute("aria-expanded", "true");
}

function setupAppointmentCustomerSearch() {
  const searchInput = document.getElementById("appointmentCustomerSearch");
  const resultsWrap = document.getElementById("appointmentCustomerResults");
  const customerSelect = document.getElementById("appointmentCustomer");
  if (!searchInput || !resultsWrap || !customerSelect || searchInput.dataset.ready === "true") return;

  searchInput.dataset.ready = "true";

  searchInput.addEventListener("input", () => {
    customerSelect.value = "";
    renderAppointmentCustomerResults(searchInput.value, false);
  });

  searchInput.addEventListener("focus", () => {
    renderAppointmentCustomerResults(searchInput.value, true);
  });

  resultsWrap.addEventListener("click", event => {
    const btn = event.target.closest("[data-customer-id]");
    if (!btn) return;
    setAppointmentCustomer(btn.dataset.customerId);
  });

  customerSelect.addEventListener("change", () => {
    setAppointmentCustomer(customerSelect.value);
  });

  document.addEventListener("click", event => {
    const picker = event.target.closest(".appointment-customer-picker");
    if (picker) return;
    resultsWrap.classList.add("hidden");
    searchInput.setAttribute("aria-expanded", "false");
  });
}

function populateAppointmentForm(customerId = null) {
  const data = getData();
  const customerSelect = document.getElementById("appointmentCustomer");
  const serviceSelect = document.getElementById("appointmentService");

  customerSelect.innerHTML = `<option value="">${t("chooseCustomer")}</option>` +
    data.customers.map(c => `<option value="${c.id}">${fullName(c)}</option>`).join("");
  const activeServices = (data.services || []).filter(service => service.isActive !== false);
  serviceSelect.innerHTML = activeServices.map(s => `<option value="${s.id}">${s.name}</option>`).join("");

  setupAppointmentCustomerSearch();

  if (customerId) {
    setAppointmentCustomer(customerId);
  } else {
    setAppointmentCustomer("");
    const searchInput = document.getElementById("appointmentCustomerSearch");
    if (searchInput) searchInput.value = "";
  }
}

function syncServiceDefaults() {
  const data = getData();
  const service = serviceById(data, document.getElementById("appointmentService").value);

  if (!service) return;

  document.getElementById("appointmentDuration").value = service.duration;
  document.getElementById("appointmentPrice").value = service.price;
}

function openNewAppointmentDialog(prefillCustomerId = null) {
  populateAppointmentForm(prefillCustomerId);

  document.getElementById("appointmentForm")?.classList.remove("appointment-form-edit");
  document.getElementById("appointmentModalTitle").textContent = t("newAppointment");
  document.getElementById("appointmentId").value = "";
  document.getElementById("appointmentDate").value = state.selectedDate;
  document.getElementById("appointmentTime").value = "10:00";
  document.getElementById("appointmentStatus").value = "gepland";
  document.getElementById("appointmentStatusWrap").style.display = "none";
  syncAppointmentDateTimeDisplays();

  const serviceSelect = document.getElementById("appointmentService");
  if (serviceSelect.options.length) {
    serviceSelect.value = serviceSelect.options[0].value;
  }

  syncServiceDefaults();
  document.getElementById("deleteAppointmentBtn").style.visibility = "hidden";
  document.getElementById("appointmentDialog").showModal();
}

function openEditAppointmentDialog(id) {
  const data = getData();
  const app = data.appointments.find(a => String(a.id) === String(id));
  if (!app) return;

  populateAppointmentForm(app.customerId);

  const appointmentServiceSelect = document.getElementById("appointmentService");
  const currentService = serviceById(data, app.serviceId);
  if (appointmentServiceSelect && currentService && !Array.from(appointmentServiceSelect.options).some(option => String(option.value) === String(currentService.id))) {
    const option = document.createElement("option");
    option.value = currentService.id;
    option.textContent = `${currentService.name} (inactief)`;
    appointmentServiceSelect.appendChild(option);
  }

  document.getElementById("appointmentForm")?.classList.add("appointment-form-edit");
  document.getElementById("appointmentModalTitle").textContent = t("editAppointment");
  document.getElementById("appointmentId").value = app.id;
  setAppointmentCustomer(app.customerId);
  document.getElementById("appointmentDate").value = app.date;
  document.getElementById("appointmentTime").value = app.time;
  document.getElementById("appointmentService").value = app.serviceId;
  document.getElementById("appointmentDuration").value = app.duration;
  document.getElementById("appointmentPrice").value = app.price;
  document.getElementById("appointmentStatus").value = app.status;
  document.getElementById("appointmentStatusWrap").style.display = "block";
  syncAppointmentDateTimeDisplays();

  document.getElementById("deleteAppointmentBtn").style.visibility = "visible";
  document.getElementById("appointmentDialog").showModal();
}

function positionPaymentPopover() {
  const popover = document.getElementById("paymentPopover");
  if (!popover || popover.classList.contains("hidden") || !paymentPopoverState.anchorRect) return;

  const card = popover.querySelector(".payment-popover-card");
  if (!card) return;

  const margin = 12;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const cardRect = card.getBoundingClientRect();
  const anchor = paymentPopoverState.anchorRect;

  let left = anchor.right - cardRect.width;
  left = Math.max(margin, Math.min(left, viewportWidth - cardRect.width - margin));

  let top = anchor.top - cardRect.height - 10;
  const spaceAbove = anchor.top - margin;
  const spaceBelow = viewportHeight - anchor.bottom - margin;

  if (top < margin) {
    if (spaceBelow >= cardRect.height || spaceBelow > spaceAbove) {
      top = Math.min(viewportHeight - cardRect.height - margin, anchor.bottom + 10);
      popover.dataset.placement = "bottom";
    } else {
      top = margin;
      popover.dataset.placement = "top";
    }
  } else {
    popover.dataset.placement = "top";
  }

  popover.style.left = `${Math.round(left)}px`;
  popover.style.top = `${Math.round(top)}px`;
}

function closePaymentPopover() {
  const popover = document.getElementById("paymentPopover");
  if (!popover) return;
  popover.classList.add("hidden");
  popover.setAttribute("aria-hidden", "true");
  popover.style.left = "";
  popover.style.top = "";
  popover.removeAttribute("data-placement");
  paymentPopoverState.appointmentId = null;
  paymentPopoverState.anchorRect = null;
}

function renderPaymentPopoverOptions(app, data = getData()) {
  const list = document.getElementById("paymentMethodListPopup");
  if (!list) return;

  const methods = getPaymentMethods(data);
  const selectedName = paymentMethodNameForAppointment(app, data) || "";
  const items = [{ value: "", label: "Onbetaald", unpaid: true }, ...methods.map(method => ({ value: method.name, label: method.name, unpaid: false }))];

  list.innerHTML = items.map(item => {
    const isActive = item.unpaid ? !app.paid : (app.paid && item.value === selectedName);
    return `
      <button
        type="button"
        class="payment-method-popup-item ${isActive ? "active" : ""} ${item.unpaid ? "is-unpaid" : ""}"
        data-payment-value="${item.value}"
        data-unpaid="${item.unpaid ? "true" : "false"}"
        role="menuitemradio"
        aria-checked="${isActive ? "true" : "false"}"
      >
        <span>${item.label}</span>
      </button>
    `;
  }).join("");

  list.querySelectorAll(".payment-method-popup-item").forEach(button => {
    button.addEventListener("click", async event => {
      event.stopPropagation();
      const methodName = button.dataset.paymentValue || "";
      if (button.dataset.unpaid === "true") {
        await markUnpaid();
        return;
      }
      await confirmPaymentSelection(methodName);
    });
  });
}

function openPaymentDialog(id, anchorEl = null) {
  const data = getData();
  const app = data.appointments.find(a => String(a.id) === String(id));
  if (!app) return;

  const popover = document.getElementById("paymentPopover");
  if (!popover) return;

  document.getElementById("paymentAppointmentId").value = id;
  document.getElementById("paymentAmount").textContent = euro(app.price, app.currency);
  document.getElementById("paymentDialogCurrentMethod").textContent = app.paid
    ? (paymentMethodNameForAppointment(app, data) || "Onbekend")
    : "Nog niet betaald";

  renderPaymentPopoverOptions(app, data);

  const rect = anchorEl?.getBoundingClientRect?.();
  paymentPopoverState.appointmentId = String(id);
  paymentPopoverState.anchorRect = rect
    ? { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left, width: rect.width, height: rect.height }
    : { top: window.innerHeight / 2, right: window.innerWidth / 2 + 120, bottom: window.innerHeight / 2, left: window.innerWidth / 2 - 120, width: 240, height: 0 };

  popover.classList.remove("hidden");
  popover.setAttribute("aria-hidden", "false");
  requestAnimationFrame(positionPaymentPopover);
}

function renderPaymentMethods() {
  const data = getData();
  const list = document.getElementById("paymentMethodsList");
  if (!list) return;

  const methods = getPaymentMethods(data);
  if (!methods.length) {
    list.innerHTML = `<div class="empty-state">${t("noPaymentMethods")}</div>`;
    return;
  }

  list.innerHTML = "";
  methods.forEach(method => {
    const usageCount = (data.appointments || []).filter(app => paymentMethodNameForAppointment(app, data) === method.name).length;
    const card = document.createElement("div");
    card.className = "service-card payment-method-card";
    card.innerHTML = `
      <button type="button" data-id="${method.id}">
        <div class="client-name">${method.name}</div>
        <div class="meta">${usageCount} ${usageCount === 1 ? t("paymentSingular") : t("paymentPlural")}</div>
      </button>
    `;
    card.querySelector("button").addEventListener("click", () => openEditPaymentMethodDialog(method.id));
    list.appendChild(card);
  });
}

function openNewPaymentMethodDialog() {
  document.getElementById("paymentMethodModalTitle").textContent = t("newPaymentMethod");
  document.getElementById("paymentMethodId").value = "";
  document.getElementById("paymentMethodName").value = "";
  document.getElementById("deletePaymentMethodBtn").style.visibility = "hidden";
  document.getElementById("paymentMethodDialog").showModal();
}

function openEditPaymentMethodDialog(id) {
  const data = getData();
  const method = getPaymentMethods(data).find(item => String(item.id) === String(id));
  if (!method) return;

  document.getElementById("paymentMethodModalTitle").textContent = t("editPaymentMethod");
  document.getElementById("paymentMethodId").value = method.id;
  document.getElementById("paymentMethodName").value = method.name;
  document.getElementById("deletePaymentMethodBtn").style.visibility = "visible";
  document.getElementById("paymentMethodDialog").showModal();
}

function openNewClientDialog() {
  document.getElementById("clientModalTitle").textContent = t("newClient");
  document.getElementById("clientId").value = "";
  document.getElementById("clientFirstName").value = "";
  document.getElementById("clientLastName").value = "";
  document.getElementById("clientPhone").value = "";
  document.getElementById("clientEmail").value = "";
  document.getElementById("clientNote").value = "";

  document.getElementById("clientDialog").showModal();
}

function openEditClientDialog(id) {
  const data = getData();
  const client = customerById(data, id);
  if (!client) return;

  document.getElementById("clientModalTitle").textContent = t("editClient");
  document.getElementById("clientId").value = client.id;
  document.getElementById("clientFirstName").value = client.firstName || "";
  document.getElementById("clientLastName").value = client.lastName || "";
  document.getElementById("clientPhone").value = client.phone || "";
  document.getElementById("clientEmail").value = client.email || "";
  document.getElementById("clientNote").value = client.note || "";

  document.getElementById("clientDialog").showModal();
}

function openNewServiceDialog() {
  document.getElementById("serviceModalTitle").textContent = t("newService");
  document.getElementById("serviceId").value = "";
  document.getElementById("serviceName").value = "";
  document.getElementById("serviceDuration").value = 60;
  document.getElementById("servicePrice").value = 65;

  const reactivateWrap = document.getElementById("serviceReactivateWrap");
  const reactivateCheckbox = document.getElementById("serviceReactivateCheckbox");
  if (reactivateWrap) reactivateWrap.classList.add("hidden");
  if (reactivateCheckbox) reactivateCheckbox.checked = false;

  document.getElementById("deleteServiceBtn").style.visibility = "hidden";
  document.getElementById("serviceDialog").showModal();
}

function openEditServiceDialog(id) {
  const data = getData();
  const service = serviceById(data, id);
  if (!service) return;

  const isInactive = service.isActive === false;

  document.getElementById("serviceModalTitle").textContent = t("editService");
  document.getElementById("serviceId").value = service.id;
  document.getElementById("serviceName").value = service.name;
  document.getElementById("serviceDuration").value = service.duration;
  document.getElementById("servicePrice").value = service.price;

  const reactivateWrap = document.getElementById("serviceReactivateWrap");
  const reactivateCheckbox = document.getElementById("serviceReactivateCheckbox");
  if (reactivateWrap) reactivateWrap.classList.toggle("hidden", !isInactive);
  if (reactivateCheckbox) reactivateCheckbox.checked = false;

  document.getElementById("deleteServiceBtn").style.visibility = isInactive ? "hidden" : "visible";
  document.getElementById("serviceDialog").showModal();
}

/* =========================
   SAVE / DELETE
========================= */

async function savePaymentMethodFromForm(event) {
  event.preventDefault();

  const user = await getCurrentUser();
  const data = getData();
  const rawId = document.getElementById("paymentMethodId").value;
  const id = rawId ? Number(rawId) : null;
  const name = document.getElementById("paymentMethodName").value.trim();

  if (!name) {
    await appAlert("Geef een naam voor de betaalwijze in.", { title: "Betaalwijze", variant: "warning" });
    return;
  }

  const duplicate = getPaymentMethods(data).find(method => method.name.toLowerCase() === name.toLowerCase() && String(method.id) !== String(id || ""));
  if (duplicate) {
    await appAlert("Er bestaat al een betaalwijze met deze naam.", { title: "Dubbele betaalwijze", variant: "warning" });
    return;
  }

  if (!user) {
    const methods = getPaymentMethods(data);
    if (id) {
      const existing = methods.find(method => Number(method.id) === id);
      if (existing) existing.name = name;
    } else {
      methods.push({ id: nextId(methods), name, sortOrder: methods.length + 1 });
    }
    data.paymentMethods = methods.map((method, index) => ({ ...method, sortOrder: index + 1 }));
    saveData(data);
    closeDialog("paymentMethodDialog");
    rerenderAll();
    return;
  }

  let error;
  if (id) {
    ({ error } = await supabaseClient
      .from("payment_methods")
      .update({ name, updated_at: new Date().toISOString() })
      .eq("id", Number(id))
      .eq("user_id", user.id));
  } else {
    ({ error } = await supabaseClient
      .from("payment_methods")
      .insert({
        user_id: user.id,
        name,
        sort_order: getPaymentMethods(data).length + 1
      }));
  }

  if (error) {
    await appAlert("Opslaan betaalwijze mislukt: " + error.message, { title: "Opslaan mislukt", variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closeDialog("paymentMethodDialog");
  rerenderAll();
}

async function deleteCurrentPaymentMethod() {
  const id = document.getElementById("paymentMethodId").value;
  if (!id) return;

  const data = getData();
  if (getPaymentMethods(data).length <= 1) {
    await appAlert("Er moet minstens één betaalwijze overblijven.", { title: "Betaalwijze", variant: "warning" });
    return;
  }

  const confirmed = await appConfirm("Deze betaalwijze wordt verwijderd uit de keuzelijst. Eerdere betalingen behouden hun opgeslagen naam.", {
    title: "Betaalwijze verwijderen",
    confirmText: t("delete"),
    cancelText: t("cancel"),
    variant: "warning"
  });
  if (!confirmed) return;

  const user = await getCurrentUser();

  if (!user) {
    data.paymentMethods = getPaymentMethods(data).filter(method => String(method.id) !== String(id));
    saveData(data);
    closeDialog("paymentMethodDialog");
    rerenderAll();
    return;
  }

  const { error } = await supabaseClient
    .from("payment_methods")
    .delete()
    .eq("id", Number(id))
    .eq("user_id", user.id);

  if (error) {
    await appAlert("Verwijderen betaalwijze mislukt: " + error.message, { title: "Verwijderen mislukt", variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closeDialog("paymentMethodDialog");
  rerenderAll();
}


function normalizeServiceNameForDuplicateCheck(name) {
  return String(name || "").trim().replace(/\s+/g, " ").toLocaleLowerCase();
}

function getUniqueServiceNameWithCounter(data, requestedName, excludeId = null) {
  const baseName = String(requestedName || "").trim().replace(/\s+/g, " ");
  if (!baseName) return "";

  const usedNames = new Set(
    (data.services || [])
      .filter(service => String(service.id) !== String(excludeId || ""))
      .map(service => normalizeServiceNameForDuplicateCheck(service.name))
      .filter(Boolean)
  );

  if (!usedNames.has(normalizeServiceNameForDuplicateCheck(baseName))) {
    return baseName;
  }

  let counter = 2;
  let candidate = `${baseName} (${counter})`;
  while (usedNames.has(normalizeServiceNameForDuplicateCheck(candidate))) {
    counter += 1;
    candidate = `${baseName} (${counter})`;
  }

  return candidate;
}

async function resolveServiceNameBeforeSave(data, requestedName, excludeId = null) {
  const cleanName = String(requestedName || "").trim().replace(/\s+/g, " ");
  if (!cleanName) {
    await appAlert(t("serviceNameRequired"), { title: t("service"), variant: "warning" });
    return null;
  }

  const duplicate = (data.services || []).find(service =>
    String(service.id) !== String(excludeId || "") &&
    normalizeServiceNameForDuplicateCheck(service.name) === normalizeServiceNameForDuplicateCheck(cleanName)
  );

  if (!duplicate) return cleanName;

  const uniqueName = getUniqueServiceNameWithCounter(data, cleanName, excludeId);
  const confirmed = await appConfirm(
    t("duplicateServiceMessage", { name: cleanName, uniqueName }),
    {
      title: t("duplicateServiceTitle"),
      confirmText: t("saveAnyway"),
      cancelText: t("cancel"),
      variant: "warning"
    }
  );

  return confirmed ? uniqueName : null;
}

async function saveClientFromForm(event) {
  event.preventDefault();

  const user = await getCurrentUser();

  if (!user) {
    const data = getData();
    const id = Number(document.getElementById("clientId").value);

    const payload = {
      firstName: document.getElementById("clientFirstName").value.trim(),
      lastName: document.getElementById("clientLastName").value.trim(),
      phone: document.getElementById("clientPhone").value.trim(),
      email: document.getElementById("clientEmail").value.trim(),
      note: document.getElementById("clientNote").value.trim()
    };

    if (id) {
      Object.assign(customerById(data, id), payload);
    } else {
      data.customers.push({ id: nextId(data.customers), ...payload });
    }

    saveData(data);
    closeDialog("clientDialog");
    renderAlphabetFilter();
    renderClients();
    renderRevenueFilters();
    return;
  }

  const id = document.getElementById("clientId").value;

  const payload = {
    user_id: user.id,
    first_name: document.getElementById("clientFirstName").value.trim(),
    last_name: document.getElementById("clientLastName").value.trim(),
    phone: document.getElementById("clientPhone").value.trim(),
    email: document.getElementById("clientEmail").value.trim(),
    note: document.getElementById("clientNote").value.trim()
  };

  let error;

  if (id) {
    ({ error } = await supabaseClient
      .from("customers")
      .update(payload)
      .eq("id", Number(id))
      .eq("user_id", user.id));
  } else {
    ({ error } = await supabaseClient
      .from("customers")
      .insert(payload));
  }

  if (error) {
    await appAlert("Opslaan klant mislukt: " + error.message, { title: "Opslaan mislukt", variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closeDialog("clientDialog");
  renderAlphabetFilter();
  renderClients();
  renderRevenueFilters();

  if (state.selectedClientId) {
    openClientDetail(state.selectedClientId);
  }
}

async function saveServiceFromForm(event) {
  event.preventDefault();

  const user = await getCurrentUser();
  const data = getData();
  const rawId = document.getElementById("serviceId").value;
  const id = rawId ? Number(rawId) : null;
  const reactivateChecked = Boolean(document.getElementById("serviceReactivateCheckbox")?.checked);
  const serviceName = await resolveServiceNameBeforeSave(data, document.getElementById("serviceName").value, id);

  if (!serviceName) return;

  if (!user) {
    const existingService = id ? serviceById(data, id) : null;
    const nextIsActive = id
      ? (existingService?.isActive === false ? reactivateChecked : true)
      : true;

    const payload = {
      name: serviceName,
      duration: Number(document.getElementById("serviceDuration").value),
      price: Number(document.getElementById("servicePrice").value),
      isActive: nextIsActive
    };

    if (id) {
      Object.assign(existingService, payload);
    } else {
      data.services.push({ id: nextId(data.services), ...payload });
    }

    saveData(data);
    closeDialog("serviceDialog");
    rerenderAll();
    return;
  }

  const existingService = id ? serviceById(data, id) : null;
  const nextIsActive = id
    ? (existingService?.isActive === false ? reactivateChecked : true)
    : true;

  const payload = {
    user_id: user.id,
    name: serviceName,
    duration: Number(document.getElementById("serviceDuration").value),
    price: Number(document.getElementById("servicePrice").value),
    is_active: nextIsActive
  };

  let error;

  if (id) {
    ({ error } = await supabaseClient
      .from("services")
      .update(payload)
      .eq("id", Number(id))
      .eq("user_id", user.id));
  } else {
    ({ error } = await supabaseClient
      .from("services")
      .insert(payload));
  }

  if (error) {
    await appAlert("Opslaan dienst mislukt: " + error.message, { title: t("saveFailed"), variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closeDialog("serviceDialog");
  rerenderAll();
}

async function saveAppointmentFromForm(event) {
  event.preventDefault();

  const user = await getCurrentUser();
  const data = getData();
  const rawId = document.getElementById("appointmentId").value;
  const id = rawId ? Number(rawId) : null;
  const settings = getSettings();

  const selectedCustomerId = document.getElementById("appointmentCustomer").value;

  if (!selectedCustomerId) {
    await appAlert("Kies eerst een klant uit de zoekresultaten.", { title: "Klant kiezen", variant: "warning" });
    document.getElementById("appointmentCustomerSearch")?.focus();
    return;
  }

  const localPayload = {
    customerId: Number(selectedCustomerId),
    date: document.getElementById("appointmentDate").value,
    time: document.getElementById("appointmentTime").value,
    serviceId: Number(document.getElementById("appointmentService").value),
    duration: Number(document.getElementById("appointmentDuration").value),
    price: Number(document.getElementById("appointmentPrice").value),
    status: id ? document.getElementById("appointmentStatus").value : "gepland"
  };

  if (isAppointmentInPast(localPayload)) {
    const confirmedPast = await appConfirm(buildPastAppointmentMessage(localPayload), {
      title: "Afspraak in het verleden",
      confirmText: t("save"),
      cancelText: t("cancel"),
      variant: "warning"
    });
    if (!confirmedPast) return;
  }

  if (settings.overlapWarningsEnabled) {
    const overlapApp = findAppointmentOverlap(localPayload, data.appointments, settings.defaultBreakMinutes, id);
    if (overlapApp) {
      const confirmed = await appConfirm(buildOverlapMessage(localPayload, overlapApp, data.appointments, settings.defaultBreakMinutes, id), {
        title: "Overlap gedetecteerd",
        confirmText: t("save"),
        cancelText: t("cancel"),
        variant: "warning"
      });
      if (!confirmed) return;
    }
  }

  if (!user) {
    if (id) {
      const existingApp = data.appointments.find(a => Number(a.id) === id);
      Object.assign(existingApp, { ...localPayload, currency: existingApp.currency || getCurrentCurrency() });
    } else {
      data.appointments.push({
        id: nextId(data.appointments),
        ...localPayload,
        paid: false,
        paymentMethodName: null,
        currency: getCurrentCurrency()
      });
    }

    saveData(data);
    closeDialog("appointmentDialog");

    state.selectedDate = localPayload.date;
    const picked = new Date(localPayload.date + "T00:00:00");
    state.currentYear = picked.getFullYear();
    state.currentMonth = picked.getMonth();

    rerenderAll();
    return;
  }

  const existingApp = data.appointments.find(a => String(a.id) === String(id));
  const isPaid = existingApp ? Boolean(existingApp.paid) : false;
  const existingPaymentMethodName = paymentMethodNameForAppointment(existingApp, data) || null;
  const appointmentCurrency = normalizeCurrency(existingApp?.currency || getCurrentCurrency());

  const payload = {
    user_id: user.id,
    customer_id: localPayload.customerId,
    appointment_date: localPayload.date,
    appointment_time: localPayload.time,
    service_id: localPayload.serviceId,
    duration: localPayload.duration,
    price: localPayload.price,
    status: localPayload.status,
    paid: isPaid,
    payment_method_label: isPaid ? existingPaymentMethodName : null,
    currency: appointmentCurrency
  };

  let error;

  if (id) {
    ({ error } = await supabaseClient
      .from("appointments")
      .update(payload)
      .eq("id", Number(id))
      .eq("user_id", user.id));
  } else {
    ({ error } = await supabaseClient
      .from("appointments")
      .insert(payload));
  }

  if (error) {
    await appAlert("Opslaan afspraak mislukt: " + error.message, { title: "Opslaan mislukt", variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closeDialog("appointmentDialog");

  state.selectedDate = payload.appointment_date;
  const picked = new Date(payload.appointment_date + "T00:00:00");
  state.currentYear = picked.getFullYear();
  state.currentMonth = picked.getMonth();

  rerenderAll();
}

async function deleteCurrentAppointment() {
  const id = document.getElementById("appointmentId").value;
  if (!id) return;

  const confirmed = await appConfirm("Deze afspraak wordt definitief verwijderd.", {
    title: "Afspraak verwijderen",
    confirmText: t("delete"),
    cancelText: t("cancel"),
    variant: "danger"
  });

  if (!confirmed) return;

  const user = await getCurrentUser();

  if (!user) {
    const data = getData();
    data.appointments = data.appointments.filter(a => String(a.id) !== String(id));
    saveData(data);
    closeDialog("appointmentDialog");
    rerenderAll();
    return;
  }

  const { error } = await supabaseClient
    .from("appointments")
    .delete()
    .eq("id", Number(id))
    .eq("user_id", user.id);

  if (error) {
    await appAlert("Verwijderen afspraak mislukt: " + error.message, { title: "Verwijderen mislukt", variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closeDialog("appointmentDialog");
  rerenderAll();
}

async function deleteCurrentService() {
  const id = document.getElementById("serviceId").value;
  if (!id) return;

  const confirmed = await appConfirm("Deze dienst wordt op inactief gezet en verdwijnt uit de dienstenlijst en nieuwe afspraken. Bestaande afspraken blijven behouden.", {
    title: "Dienst inactief zetten",
    confirmText: "Inactief zetten",
    cancelText: t("cancel"),
    variant: "danger"
  });

  if (!confirmed) return;

  const user = await getCurrentUser();

  if (!user) {
    const data = getData();
    const service = serviceById(data, id);
    if (service) service.isActive = false;
    saveData(data);
    closeDialog("serviceDialog");
    rerenderAll();
    return;
  }

  const { error } = await supabaseClient
    .from("services")
    .update({ is_active: false })
    .eq("id", Number(id))
    .eq("user_id", user.id);

  if (error) {
    await appAlert("Dienst inactief zetten mislukt: " + error.message, { title: "Aanpassen mislukt", variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closeDialog("serviceDialog");
  rerenderAll();
}

async function confirmPaymentSelection(methodName) {
  const id = document.getElementById("paymentAppointmentId").value;
  const safeMethodName = String(methodName || "").trim();
  const user = await getCurrentUser();
  const data = getData();

  if (!safeMethodName) {
    await appAlert("Kies een geldige betaalwijze.", { title: "Betaling", variant: "warning" });
    return;
  }

  if (!user) {
    const appointment = data.appointments.find(a => String(a.id) === String(id));
    if (!appointment) return;

    appointment.paid = true;
    appointment.paymentMethodName = safeMethodName;
    if (appointment.status === "gepland") appointment.status = "afgerond";

    saveData(data);
    closePaymentPopover();
    rerenderAll();
    return;
  }

  const { error } = await supabaseClient
    .from("appointments")
    .update({
      paid: true,
      payment_method_label: safeMethodName,
      status: "afgerond"
    })
    .eq("id", Number(id))
    .eq("user_id", user.id);

  if (error) {
    await appAlert("Betaling opslaan mislukt: " + error.message, { title: "Opslaan mislukt", variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closePaymentPopover();
  rerenderAll();
}

async function markUnpaid() {
  const id = document.getElementById("paymentAppointmentId").value;
  const user = await getCurrentUser();

  if (!user) {
    const data = getData();
    const appointment = data.appointments.find(a => String(a.id) === String(id));
    if (!appointment) return;

    appointment.paid = false;
    appointment.paymentMethodName = null;

    saveData(data);
    closePaymentPopover();
    rerenderAll();
    return;
  }

  const { error } = await supabaseClient
    .from("appointments")
    .update({
      paid: false,
      payment_method_label: null
    })
    .eq("id", Number(id))
    .eq("user_id", user.id);

  if (error) {
    await appAlert("Betaling bijwerken mislukt: " + error.message, { title: "Bijwerken mislukt", variant: "danger" });
    return;
  }

  await loadAllDataFromSupabase();
  closePaymentPopover();
  rerenderAll();
}

/* =========================
   MONTH PICKER
========================= */

function openMonthPicker() {
  const monthSelect = document.getElementById("monthSelect");
  monthSelect.innerHTML = monthNames.map((m, i) => `<option value="${i}">${getMonthNameUpper(i)}</option>`).join("");
  monthSelect.value = String(state.currentMonth);
  document.getElementById("yearSelect").value = state.currentYear;

  document.getElementById("monthPickerDialog").showModal();
}

function saveMonthPicker(event) {
  event.preventDefault();

  state.currentMonth = Number(document.getElementById("monthSelect").value);
  state.currentYear = Number(document.getElementById("yearSelect").value);

  const daysInMonth = new Date(state.currentYear, state.currentMonth + 1, 0).getDate();
  const existingDay = Number(state.selectedDate.slice(8, 10));
  const safeDay = Math.min(existingDay, daysInMonth);

  state.selectedDate = `${state.currentYear}-${String(state.currentMonth + 1).padStart(2, "0")}-${String(safeDay).padStart(2, "0")}`;

  closeDialog("monthPickerDialog");
  renderCalendar();
  renderAgendaList();
  renderRevenue();
}

function closeDialog(id) {
  const dialog = document.getElementById(id);
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
}

function rerenderAll() {
  updateStaticI18n();
  renderAlphabetFilter();
  renderCalendar();
  renderAgendaList();
  renderClients();
  renderServices();
  renderPaymentMethods();
  renderStatistics();
  renderRevenue();

  if (state.selectedClientId && state.currentScreen === "clientDetailScreen") {
    openClientDetail(state.selectedClientId);
  }

  syncNotificationState();
  applyNavStyleActionButtons();
}


function getActionButtonIconSvg(type) {
  const icons = {
    save: `<svg class="app-action-nav-icon" viewBox="0 0 7.4083331 7.4083333" aria-hidden="true" focusable="false"><path d="m 1.2487599,6.3350499 -0.09755,-0.067983 V 3.7370896 c 0,-1.9103368 0.012742,-2.5426364 0.052027,-2.58166 0.035778,-0.035538 0.252426,-0.051681 0.6936895,-0.051681 H 2.5385889 V 1.9651164 2.8264842 H 3.7742229 5.009857 V 1.9651173 1.1037498 H 5.3902354 5.7706138 L 6.1067451,1.4396243 6.4428764,1.7754988 6.4308947,4.021599 c -0.00945,1.7724982 -0.023861,2.2579 -0.068322,2.3020623 -0.044619,0.04432 -0.572285,0.058401 -2.5363015,0.067672 C 1.624705,6.4017253 1.3353593,6.3954233 1.24876,6.3350563 Z M 5.2892092,5.8747533 c 0.055268,-0.078383 0.067492,-0.2421888 0.067492,-0.9044356 0,-0.7512913 -0.00616,-0.8148317 -0.086711,-0.8948522 -0.083105,-0.082552 -0.1445187,-0.086135 -1.4769401,-0.086135 -0.8754091,0 -1.4212835,0.016507 -1.4740897,0.044588 -0.078777,0.041885 -0.083861,0.098794 -0.083861,0.9388902 0,0.6381478 0.014902,0.9091103 0.052027,0.9459891 0.038378,0.038125 0.4301191,0.05168 1.4933091,0.05168 1.4402317,0 1.4413315,-6.93e-5 1.508774,-0.09572 z M 4.0993893,1.9651155 V 1.2760213 H 4.4245562 4.7497231 V 1.9651155 2.65421 H 4.4245562 4.0993893 Z" /></svg>`,
    cancel: `<svg class="app-action-nav-icon" viewBox="0 0 7.4083331 7.4083333" aria-hidden="true" focusable="false"><path d="M 3.7216875,1.0757028 A 2.6458266,2.6458266 0 0 0 1.0758545,3.721536 2.6458266,2.6458266 0 0 0 3.7216875,6.3673694 2.6458266,2.6458266 0 0 0 6.3675215,3.721536 2.6458266,2.6458266 0 0 0 3.7216875,1.0757028 Z m -0.82292,1.3657978 c 0.05451,0 0.138465,0.070411 0.447301,0.375477 l 0.380029,0.3754771 0.378179,-0.3754771 c 0.292326,-0.2902706 0.392113,-0.375477 0.439905,-0.375477 0.04347,0 0.107409,0.044353 0.215615,0.1494797 0.208329,0.2023863 0.245294,0.2617301 0.207508,0.3332359 -0.01611,0.030483 -0.188746,0.217296 -0.383726,0.4151581 l -0.35457,0.3598322 0.335512,0.333947 c 0.184481,0.1836653 0.357479,0.3692108 0.384437,0.4123137 0.04674,0.074724 0.04701,0.081153 0.0081,0.1405195 -0.08631,0.1317284 -0.351617,0.3670857 -0.413878,0.3670857 -0.0465,0 -0.150027,-0.088488 -0.439621,-0.376046 L 3.7248165,4.2009804 3.4082215,4.5137358 C 3.2340805,4.6857555 3.0594205,4.8549521 3.0200865,4.8897817 2.9045905,4.9920513 2.8540445,4.9753377 2.6447515,4.766045 2.5193755,4.6406693 2.4577245,4.5608493 2.4577245,4.5238338 c 0,-0.039229 0.110334,-0.1669151 0.381308,-0.4410433 L 3.2204835,3.6969309 2.8390325,3.3116402 c -0.271639,-0.2745061 -0.381308,-0.401336 -0.381308,-0.4407588 0,-0.085362 0.353348,-0.4293808 0.441043,-0.4293808 z" /></svg>`,
    delete: `<svg class="app-action-nav-icon" viewBox="0 0 7.4083331 7.4083333" aria-hidden="true" focusable="false"><path d="m 2.2698341,6.1775822 c -0.1094284,-0.04971 -0.231493,-0.164087 -0.290851,-0.272533 -0.037167,-0.0679 -0.041899,-0.221644 -0.052699,-1.711931 L 1.9144211,2.5557908 1.7067886,2.5489308 1.4991566,2.5420708 V 2.3545326 2.1669857 l 0.1008498,-0.0073 0.1008498,-0.0073 0.013669,-0.1423763 c 0.01596,-0.1662368 0.034542,-0.2158412 0.089015,-0.2376519 0.02183,-0.00874 0.2399086,-0.021819 0.4846179,-0.029062 L 2.7330836,1.7301305 V 1.6192114 c 0,-0.3484396 0.3062313,-0.68698353 0.5910897,-0.68179893 0.077671,0.00141 0.1969862,-0.00708 0.4182785,-0.00708 h 0.4780034 c 0.3249416,0.00541 0.5533562,0.39764923 0.5533562,0.71128873 v 0.095511 l 0.3025494,0.00123 c 0.3906803,0.00158 0.6135415,0.026715 0.6614465,0.07462 0.023407,0.023407 0.042463,0.097122 0.050279,0.1944918 l 0.012586,0.1567987 h 0.091669 0.091669 V 2.3541076 2.543943 H 5.7823104 5.5806105 l -5.209e-4,1.6076662 c -5.104e-4,1.566046 -0.00177,1.61043 -0.048858,1.714448 -0.062582,0.138254 -0.1489784,0.227906 -0.2879761,0.29883 l -0.1119258,0.05711 -1.3830257,-5.24e-4 c -1.288121,-4.9e-4 -1.3895764,-0.0035 -1.4784713,-0.04388 z m 2.8347098,-0.400527 0.070458,-0.06526 0.00704,-1.578004 0.00704,-1.5780044 -1.4415606,-0.00612 -1.4415606,-0.00612 v 1.5800134 1.580014 l 0.069363,0.06936 0.069363,0.06936 H 3.7393895 5.0340922 Z M 2.7330841,4.1931182 V 2.9710547 h 0.2016996 0.2017 v 1.2220635 1.222064 h -0.2017 -0.2016996 z m 0.8067992,0 V 2.9710547 h 0.2017 0.2016996 v 1.2220635 1.222064 h -0.2016996 -0.2017 z m 0.8305286,0 V 2.9710547 H 4.560247 4.7500825 v 1.2220635 1.222064 H 4.560247 4.3704119 Z M 4.3466819,1.6275524 C 4.3525019,1.4948826 4.3066309,1.3905375 4.2264459,1.3628251 4.1044771,1.3096741 4.063522,1.3135821 3.7620234,1.3163031 3.4605248,1.3190231 3.3539331,1.3387671 3.2833638,1.3817941 3.1976948,1.4340251 3.136483,1.5521229 3.136483,1.6651764 v 0.07195 h 0.6050997 0.6050992 z" /></svg>`,
    ok: `<svg class="app-action-nav-icon" viewBox="0 0 7.4083331 7.4083333" aria-hidden="true" focusable="false"><path d="M 3.0465827,6.023294 C 2.9739427,5.999434 2.8963597,5.944464 2.8604957,5.891429 2.8433557,5.866079 2.7829257,5.76905 2.7262217,5.675813 2.5980057,5.465003 2.4549037,5.256914 2.2820347,5.029908 2.1539417,4.861701 2.1487597,4.852462 2.1487597,4.79231 c 0,-0.05732 0.0045,-0.06692 0.05384,-0.114171 0.117778,-0.112851 0.307085,-0.123696 0.448503,-0.02569 0.05211,0.03611 0.173259,0.200332 0.382098,0.517943 0.07379,0.112229 0.136067,0.204053 0.138384,0.204053 0.0023,0 0.03545,-0.05509 0.07362,-0.122432 0.294617,-0.519657 0.753512,-1.139717 1.196512,-1.616729 0.138195,-0.148805 0.507732,-0.517006 0.587531,-0.585406 0.09414,-0.0807 0.208563,-0.03957 0.208563,0.07497 0,0.0405 -0.0123,0.06068 -0.08951,0.146846 -0.646693,0.721674 -1.206898,1.591625 -1.599732,2.48425 -0.05664,0.128705 -0.126804,0.209421 -0.216681,0.249269 -0.07283,0.03229 -0.214666,0.04128 -0.285304,0.01808 z" /></svg>`,
    register: `<svg class="app-action-nav-icon" viewBox="0 0 7.4083331 7.4083333" aria-hidden="true" focusable="false"><path id="path1" style="fill:#000000;stroke-width:0.999995" d="M 6.540686 1.1265462 C 6.5207502 1.1259342 6.4989928 1.1281559 6.4729899 1.1322306 C 6.3772463 1.1472499 6.3497802 1.1686728 6.2456136 1.3079305 L 6.1639648 1.4169678 L 6.4921102 1.6582967 L 6.8202555 1.9001424 L 6.9039714 1.786971 C 7.0046224 1.6508614 7.0205585 1.6103329 7.0068075 1.5218709 C 6.9907771 1.4187716 6.9623561 1.3853884 6.7696126 1.245402 C 6.6474355 1.1566718 6.6004936 1.1283823 6.540686 1.1265462 z M 6.0988525 1.5048177 L 5.1795288 2.7528035 C 4.6737295 3.4391482 4.2539592 4.0131979 4.2467692 4.0281779 C 4.2334909 4.0558302 4.0991703 4.4764461 4.0255941 4.7687012 C 3.9847 4.7299384 3.9355355 4.6928504 3.8829671 4.6648315 C 3.7510954 4.5945355 3.5467462 4.5673529 3.3837728 4.5981689 C 3.2055152 4.6318736 3.0572014 4.6974253 2.7863932 4.8627523 C 2.6028527 4.9748009 2.545036 4.9979558 2.490804 4.9800578 C 2.448657 4.9661488 2.4365438 4.9456167 2.4365438 4.8880737 C 2.4365438 4.7517822 2.3524866 4.6644998 2.2127848 4.6555298 C 2.1189412 4.6495073 2.0419341 4.6728654 1.8774048 4.7573324 C 1.7856367 4.8044519 1.7535755 4.8170539 1.7575155 4.8043579 C 1.7604575 4.7948124 1.7694893 4.7468955 1.7776693 4.6979045 C 1.8403308 4.3222779 1.818114 3.9298591 1.723409 3.7362061 C 1.6845351 3.6567162 1.5954465 3.5730611 1.5249715 3.5496541 C 1.4241082 3.5161533 1.2935972 3.5348565 1.1854574 3.59823 C 1.0558029 3.6742126 0.86767815 3.8574764 0.77101237 4.0018229 C 0.58903797 4.2735582 0.49269029 4.614555 0.51004639 4.9237305 C 0.52303559 5.1550861 0.54938069 5.2177694 0.63458659 5.2177694 C 0.71761246 5.2177694 0.75323227 5.1632646 0.73483887 5.0637736 C 0.68023278 4.7683827 0.74891291 4.4324187 0.91932373 4.1609863 C 1.0647234 3.9293918 1.2846915 3.742924 1.4128337 3.742924 C 1.4555521 3.742924 1.4636897 3.7471843 1.5001668 3.7852987 C 1.5643263 3.852333 1.5904826 3.959306 1.6014526 4.203361 C 1.6115892 4.4289165 1.581476 4.6753556 1.515153 4.9123617 L 1.4856974 5.0177816 L 1.3890625 5.11545 C 1.284441 5.221176 1.1482805 5.395798 1.1017415 5.483903 C 1.0318675 5.6161831 1.019508 5.7334123 1.065568 5.8275513 C 1.080468 5.8580023 1.103242 5.8870774 1.118278 5.8952474 C 1.1786704 5.9280435 1.2211164 5.9106834 1.2872599 5.8265177 C 1.4113785 5.6685804 1.5327619 5.4591578 1.6143717 5.2616943 L 1.6619141 5.1464559 L 1.7399455 5.0885783 C 1.8923139 4.9751134 2.1051774 4.8677189 2.1791951 4.8668864 L 2.2236369 4.8663696 L 2.2303548 4.9330322 C 2.2430026 5.0608284 2.3070799 5.1421803 2.4246582 5.1784953 C 2.5011574 5.2021194 2.538608 5.2025317 2.6174113 5.1821126 C 2.6923686 5.1626893 2.7448313 5.1362095 2.8959473 5.0415527 C 3.1956042 4.8538521 3.4007604 4.7803198 3.5811768 4.7955729 C 3.7280662 4.8079895 3.8497488 4.8688587 3.9212077 4.9655884 C 3.9436157 4.9959214 3.973851 5.0251807 3.988387 5.0307007 C 4.0118873 5.0396356 4.0366277 5.038455 4.058667 5.0301839 C 4.0823353 5.0308561 4.1082484 5.023071 4.131014 5.0074463 C 4.3503697 4.8568971 4.8450496 4.5443453 4.8725708 4.5242716 C 4.8901365 4.5114593 5.2503917 4.0297198 5.828068 3.2463135 L 6.7551432 1.9890259 L 6.4269979 1.7471802 L 6.0988525 1.5048177 z M 4.4855143 4.0876058 L 4.5010173 4.2152466 L 4.5165202 4.3423706 L 4.6446777 4.3175659 L 4.7733521 4.2927612 L 4.7764526 4.345988 C 4.7781026 4.375449 4.7822144 4.4189319 4.7857544 4.4426229 L 4.7924723 4.4860311 L 4.5304728 4.6565633 C 4.3864769 4.750369 4.263131 4.8296099 4.256071 4.8327799 C 4.246158 4.8372299 4.2424213 4.8340635 4.2400513 4.8183105 C 4.2330329 4.7718075 4.1832581 4.7361197 4.1351481 4.7433797 C 4.1265881 4.7446748 4.1193141 4.7446097 4.1191284 4.7433797 C 4.1189454 4.7421659 4.1588641 4.601959 4.2074951 4.4312541 L 4.2958618 4.1206787 L 4.3909465 4.1041423 L 4.4855143 4.0876058 z " /></svg>`,
    edit: `<svg class="app-action-nav-icon" viewBox="0 0 7.4083331 7.4083333" aria-hidden="true" focusable="false"><path style="fill:#000000;stroke-width:0.999997" d="M 0.85745286,4.071847 V 1.4504062 H 2.1945137 c 1.1852598,0 1.3414524,0.00187 1.3757367,0.016158 0.1821091,0.076071 0.1821091,0.3389267 0,0.4149979 -0.034144,0.014263 -0.1685224,0.016158 -1.1468806,0.016158 H 1.3151649 V 4.071851 6.2459823 h 2.1689307 2.168927 l 4.01e-5,-1.0948674 c 4e-5,-0.7592936 0.00334,-1.1076208 0.011408,-1.1364781 0.031955,-0.1169908 0.1497368,-0.1877603 0.2683253,-0.1612213 0.074458,0.016665 0.1476153,0.08657 0.1656811,0.158314 0.00901,0.035891 0.012208,0.3913215 0.012208,1.3650459 V 6.6932919 H 3.4840622 0.8574195 Z M 1.9877636,5.5692403 c -0.015204,-0.011962 -0.027639,-0.032029 -0.027639,-0.044604 0,-0.025965 0.5483906,-1.2375886 0.5834909,-1.2891762 C 2.5561845,4.2169871 3.2293223,3.538324 4.0394791,2.7273167 L 5.5124923,1.2527564 5.9000532,1.6402179 6.2876208,2.0276795 4.8026394,3.513364 C 3.8774492,4.4389925 3.3019711,5.0072229 3.2760466,5.0207316 3.2239172,5.047897 2.0594218,5.5770097 2.0340363,5.5850673 c -0.010727,0.0034 -0.030354,-0.00334 -0.046272,-0.015831 z m 0.8071627,-0.4414675 0.382294,-0.1742256 7.88e-5,-0.058554 c 3.93e-5,-0.032209 0.00314,-0.090873 0.00685,-0.1303713 l 0.00678,-0.071815 -0.1758955,0.00734 -0.1758968,0.00734 0.0052,-0.1724897 0.0052,-0.1724892 -0.1296535,0.00294 -0.1296536,0.00294 -0.1798221,0.3948973 c -0.098902,0.2171933 -0.1798222,0.396247 -0.1798222,0.3978975 0,0.00167 0.00951,0.003 0.021141,0.003 0.065418,0 0.1244966,0.057093 0.1244966,0.1203258 0,0.021421 0.00414,0.026578 0.018206,0.022649 0.010014,-0.0028 0.1902367,-0.08349 0.4004979,-0.1793145 z M 6.0043185,1.535671 5.6166175,1.1483322 5.7466806,1.0199769 C 5.9131089,0.85573486 5.9544308,0.83275836 6.0847341,0.83199986 6.2262851,0.83119926 6.263224,0.85207366 6.4560638,1.0420535 6.684228,1.2668341 6.7154429,1.3166471 6.71607,1.4569327 6.7166037,1.5773005 6.6875837,1.6281002 6.5264658,1.7888632 L 6.3920196,1.9230105 Z" /></svg>`
  };
  return icons[type] || "";
}

function applyNavStyleActionButtons(root = document) {
  const actionMap = [
    { type: "save", key: "save", match: /^(instellingen\s+)?opslaan$|^save settings$|^save$|^enregistrer( les paramètres)?$/i },
    { type: "cancel", key: "cancel", match: /^annuleren$|^cancel$|^annuler$/i },
    { type: "delete", key: "delete", match: /^verwijderen$|^delete$|^supprimer$/i },
    { type: "ok", key: "ok", match: /^(ok)$/i },
    { type: "ok", key: "chooseConfirm", match: /^kies$|^choose$|^choisir$/i },
    { type: "register", key: "register", match: /^registreren$|^register$|^s’inscrire$|^s'inscrire$/i }
  ];

  root.querySelectorAll("button").forEach(button => {
    if (button.classList.contains("nav-btn") || button.classList.contains("icon-btn") || button.classList.contains("fab")) return;

    let action = null;
    if (button.dataset.actionType) {
      action = actionMap.find(item => item.type === button.dataset.actionType);
    }

    if (!action) {
      const plainText = (button.dataset.actionLabel || button.textContent || "").replace(/\s+/g, " ").trim();
      action = actionMap.find(item => item.match.test(plainText));
    }

    if (!action) return;

    const label = t(action.key);
    button.dataset.actionLabel = label;
    button.dataset.actionType = action.type;
    button.dataset.actionKey = action.key;
    button.setAttribute("aria-label", label);
    button.title = label;
    button.classList.add("app-action-nav-btn");
    button.innerHTML = `
      <span class="app-action-nav-ico" aria-hidden="true">${getActionButtonIconSvg(action.type)}</span>
      <span class="app-action-nav-label">${label}</span>
    `;
  });
}


/* =========================
   EVENTS
========================= */

function registerEvents() {
  applyNavStyleActionButtons();

  document.getElementById("prevMonthBtn").addEventListener("click", () => animateCalendarMonth(-1));
  document.getElementById("nextMonthBtn").addEventListener("click", () => animateCalendarMonth(1));
  setupCalendarSwipeNavigation();
  setupAppPageSwipeNavigation();
  ensureActiveNavVisible();

  document.getElementById("monthPickerBtn").addEventListener("click", openMonthPicker);
  document.getElementById("monthPickerForm").addEventListener("submit", saveMonthPicker);
  const todayIconBtn = document.getElementById("todayIconBtn");
  if (todayIconBtn) {
    const handleTodayIconTap = event => {
      event.preventDefault();
      event.stopPropagation();
      jumpToToday();
    };

    // Pointer/touch-start maakt het icoontje betrouwbaar op iPhone: de actie
    // gebeurt meteen bij de tik en kan niet door swipe-click-suppressie worden
    // tegengehouden. De click-listener blijft als fallback voor desktop.
    if (window.PointerEvent) {
      todayIconBtn.addEventListener("pointerup", handleTodayIconTap);
    } else {
      todayIconBtn.addEventListener("touchend", handleTodayIconTap, { passive: false });
    }
    todayIconBtn.addEventListener("click", handleTodayIconTap);
  }

  document.getElementById("jumpToTodayBtn")?.addEventListener("click", jumpToToday);

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", (event) => {
      if (isAuthLocked() && btn.dataset.screen !== "accountScreen") {
        event.preventDefault();
        event.stopPropagation();
        switchScreen("accountScreen", t("account"));
        return;
      }
      switchScreen(btn.dataset.screen, getScreenTitle(btn.dataset.screen, btn.dataset.title));
    });
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    const map = {
      agendaScreen: "Agenda",
      clientsScreen: "Klanten",
      servicesScreen: "Diensten",
      paymentMethodsScreen: "Betaalwijze",
      statisticsScreen: "Statistieken",
      revenueScreen: "Omzet",
      settingsScreen: "Instellingen",
      accountScreen: "Account"
    };

    switchScreen(state.previousMainScreen, getScreenTitle(state.previousMainScreen, map[state.previousMainScreen]));
  });

  document.getElementById("clientSearch").addEventListener("input", renderClients);
  document.getElementById("appointmentService").addEventListener("change", syncServiceDefaults);
  document.getElementById("settingsForm")?.addEventListener("submit", withActionLock(saveSettingsFromForm));
  document.getElementById("settingsLanguage")?.addEventListener("change", event => {
    currentProfilePreferences.language = normalizeLanguage(event.target.value);
    const data = getData();
    data.settings = { ...getSettings(), language: currentProfilePreferences.language, currency: getCurrentCurrency() };
    saveData(data);
    rerenderAll();
  });
  document.getElementById("settingsCurrency")?.addEventListener("change", event => {
    currentProfilePreferences.currency = normalizeCurrency(event.target.value);
    const data = getData();
    data.settings = { ...getSettings(), language: getCurrentLanguage(), currency: currentProfilePreferences.currency };
    saveData(data);
    rerenderAll();
  });
  document.getElementById("settingsNotificationsEnabled")?.addEventListener("change", async event => {
    const checked = Boolean(event.target.checked);
    const data = getData();
    data.settings = { ...getSettings(), notificationsEnabled: checked };
    saveData(data);
    if (checked) {
      await syncNotificationState({ requestPermission: true });
    } else {
      clearScheduledNotifications();
    }
    renderSettings();
  });

  document.getElementById("appointmentDateDisplayBtn")?.addEventListener("click", () => openAppointmentWheelPicker("date"));
  document.getElementById("appointmentTimeDisplayBtn")?.addEventListener("click", () => openAppointmentWheelPicker("time"));
  document.getElementById("appointmentDate")?.addEventListener("change", syncAppointmentDateTimeDisplays);
  document.getElementById("appointmentTime")?.addEventListener("change", syncAppointmentDateTimeDisplays);

  const appointmentWheelPickerForm = document.getElementById("appointmentWheelPickerForm");
  if (appointmentWheelPickerForm) {
    appointmentWheelPickerForm.addEventListener("submit", event => {
      event.preventDefault();
      applyAppointmentWheelPickerSelection();
      closeDialog("appointmentWheelPickerDialog");
    });
  }

  document.getElementById("appointmentForm").addEventListener("submit", withActionLock(saveAppointmentFromForm));
  document.getElementById("deleteAppointmentBtn").addEventListener("click", withActionLock(deleteCurrentAppointment));

  document.getElementById("clientForm").addEventListener("submit", withActionLock(saveClientFromForm));

  document.getElementById("serviceForm").addEventListener("submit", withActionLock(saveServiceFromForm));
  document.getElementById("deleteServiceBtn").addEventListener("click", withActionLock(deleteCurrentService));

  document.getElementById("paymentMethodForm").addEventListener("submit", withActionLock(savePaymentMethodFromForm));
  document.getElementById("deletePaymentMethodBtn").addEventListener("click", withActionLock(deleteCurrentPaymentMethod));

  document.getElementById("paymentPopoverCloseBtn")?.addEventListener("click", closePaymentPopover);

  document.addEventListener("click", event => {
    const popover = document.getElementById("paymentPopover");
    if (!popover || popover.classList.contains("hidden")) return;
    if (popover.contains(event.target)) return;
    if (event.target.closest(".price-chip")) return;
    closePaymentPopover();
  });

  window.addEventListener("resize", () => {
    const popover = document.getElementById("paymentPopover");
    if (popover && !popover.classList.contains("hidden")) positionPaymentPopover();
  });

  document.getElementById("agendaList")?.addEventListener("scroll", closePaymentPopover, { passive: true });
  document.querySelector(".calendar-panel")?.addEventListener("scroll", closePaymentPopover, { passive: true });

  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => closeDialog(btn.dataset.close));
  });

  document.getElementById("revenueDate").value = todayStr;

  ["revenuePeriodType", "revenueDate", "revenuePaymentStatusFilter", "revenuePaymentFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", renderRevenue);
  });

  const attachRevenuePeriodButton = (id, mode, openPicker) => {
    const button = document.getElementById(id);
    if (!button) return;

    button.addEventListener("contextmenu", event => event.preventDefault());
    button.addEventListener("click", event => {
      event.preventDefault();

      const currentMode = document.getElementById("revenuePeriodType")?.value || "day";
      const anchor = document.getElementById("revenueDate")?.value || todayStr;

      if (currentMode === mode) {
        openPicker();
        return;
      }

      setRevenuePeriod(mode, anchor);
    });
  };

  attachRevenuePeriodButton("revenueYearBtn", "year", () => openRevenueWheelPicker("year"));
  attachRevenuePeriodButton("revenueMonthBtn", "month", () => openRevenueWheelPicker("month"));
  attachRevenuePeriodButton("revenueWeekBtn", "week", () => openRevenueWheelPicker("week"));
  attachRevenuePeriodButton("revenueDayBtn", "day", () => openRevenueWheelPicker("day"));

  const revenueWheelPickerForm = document.getElementById("revenueWheelPickerForm");
  if (revenueWheelPickerForm) {
    revenueWheelPickerForm.addEventListener("submit", event => {
      event.preventDefault();
      applyRevenueWheelPickerSelection();
      closeDialog("revenueWheelPickerDialog");
    });
  }

  const revenueNativeDatePicker = document.getElementById("revenueNativeDatePicker");
  if (revenueNativeDatePicker) {
    revenueNativeDatePicker.addEventListener("change", event => {
      const pickedDate = event.target.value;
      if (!pickedDate) return;
      const mode = event.target.dataset.mode || "day";
      setRevenuePeriod(mode, pickedDate);
    });
  }

  const revenueExportCsvBtn = document.getElementById("revenueExportCsvBtn");
  if (revenueExportCsvBtn) {
    revenueExportCsvBtn.addEventListener("click", downloadRevenueCsv);
  }

  const revenueExportReportBtn = document.getElementById("revenueExportReportBtn");
  if (revenueExportReportBtn) {
    revenueExportReportBtn.addEventListener("click", downloadRevenueStyledReport);
  }

  const registerBtn = document.getElementById("registerBtn");
  const registerForm = document.getElementById("registerForm");
  const openRegisterBtn = document.getElementById("openRegisterDialogBtn");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const headerAccountBtn = document.getElementById("headerAccountBtn");

  const editProfileBtn = document.getElementById("editProfileBtn");
  const changePasswordBtn = document.getElementById("changePasswordBtn");
  const editProfileForm = document.getElementById("editProfileForm");
  const passwordForm = document.getElementById("passwordForm");

  if (registerBtn) registerBtn.addEventListener("click", withActionLock(registerAccount));
  if (registerForm) registerForm.addEventListener("submit", withActionLock(registerAccount));

  if (openRegisterBtn) {
    openRegisterBtn.addEventListener("click", () => {
      document.getElementById("registerDialog").showModal();
      setupPasswordToggleButtons();
    });
  }

  if (loginBtn) loginBtn.addEventListener("click", withActionLock(loginAccount));
  if (logoutBtn) logoutBtn.addEventListener("click", withActionLock(logoutAccount));
  if (editProfileBtn) editProfileBtn.addEventListener("click", openEditProfileDialog);
  if (changePasswordBtn) changePasswordBtn.addEventListener("click", openPasswordDialog);
  if (editProfileForm) editProfileForm.addEventListener("submit", withActionLock(saveProfileFromForm));
  if (passwordForm) passwordForm.addEventListener("submit", withActionLock(savePasswordFromForm));

  setupPasswordToggleButtons();

  if (headerAccountBtn) {
    headerAccountBtn.addEventListener("click", () => {
      switchScreen("accountScreen", t("account"));
    });
  }

	supabaseClient.auth.onAuthStateChange(() => {
		scheduleAuthUiRefresh();
	});

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      triggerDueAppointmentNotifications();
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', event => {
      if (event.data?.type === 'OPEN_SCREEN') {
        if (event.data.date) {
          state.selectedDate = event.data.date;
          const picked = new Date(`${event.data.date}T00:00:00`);
          state.currentYear = picked.getFullYear();
          state.currentMonth = picked.getMonth();
        }
        switchScreen(event.data.screen || 'agendaScreen', event.data.screen === 'statisticsScreen' ? 'Statistieken' : 'Agenda');
        rerenderAll();
      }
    });
  }
}


async function registerServiceWorker() {
	if ("serviceWorker" in navigator) {
	  try {
	    await navigator.serviceWorker.register("./sw.js");
	  } catch (error) {
	    console.error('Registratie service worker mislukt:', error);
	  }
	}
}

/* =========================
   LADEN VAN SUPABASE
=========================== */

async function loadCustomersFromSupabase() {
  const user = await getCurrentUser();
  if (!user) return [];

  const { data, error } = await supabaseClient
    .from("customers")
    .select("*")
    .eq("user_id", user.id)
    .order("first_name", { ascending: true });

  if (error) {
    console.error("Fout bij laden klanten:", error.message);
    return [];
  }

  return (data || []).map(c => ({
    id: c.id,
    firstName: c.first_name,
    lastName: c.last_name,
    phone: c.phone,
    email: c.email,
    note: c.note,
    customerNumber: c.customer_number ?? null
  }));
}

async function loadPaymentMethodsFromSupabase() {
  const user = await getCurrentUser();
  if (!user) return [];

  let { data, error } = await supabaseClient
    .from("payment_methods")
    .select("id, name, sort_order")
    .eq("user_id", user.id)
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    console.error("Fout bij laden betaalwijzen:", error.message);
    return [];
  }

  if (!data || !data.length) {
    const seedPayload = defaultPaymentMethods.map((method, index) => ({
      user_id: user.id,
      name: method.name,
      sort_order: index + 1
    }));

    const { data: inserted, error: insertError } = await supabaseClient
      .from("payment_methods")
      .insert(seedPayload)
      .select("id, name, sort_order");

    if (insertError) {
      console.error("Fout bij aanmaken standaard betaalwijzen:", insertError.message);
      return normalizePaymentMethods(defaultPaymentMethods);
    }

    data = inserted || [];
  }

  return normalizePaymentMethods((data || []).map(method => ({
    id: method.id,
    name: method.name,
    sortOrder: method.sort_order
  })));
}

async function loadServicesFromSupabase() {
  const user = await getCurrentUser();
  if (!user) return [];

  const { data, error } = await supabaseClient
    .from("services")
    .select("*")
    .eq("user_id", user.id)
    .order("name", { ascending: true });

  if (error) {
    console.error("Fout bij laden diensten:", error.message);
    return [];
  }

  return (data || []).map(s => ({
    id: s.id,
    name: s.name,
    duration: s.duration,
    price: Number(s.price || 0),
    isActive: s.is_active !== false
  }));
}

async function loadAppointmentsFromSupabase() {
  const user = await getCurrentUser();
  if (!user) return [];

  const { data, error } = await supabaseClient
    .from("appointments")
    .select("*")
    .eq("user_id", user.id)
    .order("appointment_date", { ascending: true })
    .order("appointment_time", { ascending: true });

  if (error) {
    console.error("Fout bij laden afspraken:", error.message);
    return [];
  }

  return (data || []).map(a => ({
    id: a.id,
    customerId: a.customer_id,
    serviceId: a.service_id,
    date: a.appointment_date,
    time: a.appointment_time ? String(a.appointment_time).slice(0, 5) : "",
    duration: a.duration,
    price: Number(a.price || 0),
    status: a.status,
    paid: Boolean(a.paid),
    paymentMethodName: a.payment_method_label ?? null,
    currency: normalizeCurrency(a.currency || DEFAULT_CURRENCY)
  }));
}

async function loadAllDataFromSupabase() {
  const customers = await loadCustomersFromSupabase();
  const services = await loadServicesFromSupabase();
  const paymentMethods = await loadPaymentMethodsFromSupabase();
  const appointments = await loadAppointmentsFromSupabase();
  const settings = await loadSettingsFromSupabase();

  saveData({
    customers,
    services,
    paymentMethods,
    appointments,
    settings
  });

  await syncNotificationState();
}

/* =========================
   STARTUP
========================= */


function getActionLockButton(event) {
  if (!event?.target) return null;
  if (event.target.matches?.('button')) return event.target;
  return event.target.closest?.('button');
}

function setActionLocked(button, locked) {
  if (!button) return;
  if (locked) {
    button.dataset.actionLocked = "true";
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    button.classList.add("is-action-locked");
  } else {
    delete button.dataset.actionLocked;
    button.disabled = false;
    button.removeAttribute("aria-busy");
    button.classList.remove("is-action-locked");
  }
}

function withActionLock(handler) {
  return async function actionLockWrapper(event) {
    const button = getActionLockButton(event) || this?.querySelector?.('button[type="submit"], .btn-primary, .btn-danger, button');
    if (button?.dataset?.actionLocked === "true") {
      event?.preventDefault?.();
      event?.stopPropagation?.();
      return;
    }

    setActionLocked(button, true);
    try {
      return await handler.call(this, event);
    } finally {
      setActionLocked(button, false);
    }
  };
}

async function initAppData() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (user) {
        await loadAllDataFromSupabase();
    } else {
        seedData();
    }
}

async function startApp() {
	await registerServiceWorker();
	await initAppData();
	registerEvents();
	await syncAuthUI();
	rerenderAll();
	await syncNotificationState();

  const user = await getCurrentUser();

  if (user) {
    switchScreen("agendaScreen", t("agenda"));
  } else {
    switchScreen("accountScreen", t("account"));
  }
}

startApp();