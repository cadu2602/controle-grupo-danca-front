import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'br',
		interpolation: {
			escapeValue: false,
		},
		resources: {
			br: {
				translation: {
					meses: {
						marco: 'Março',
						abril: 'Abril',
						maio: 'Maio',
					},
					mensalidadeMes: 'Mensalidades por mês',
				},
			},
		},
	});

export default i18n;
