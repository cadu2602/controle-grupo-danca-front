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
						janeiro: 'Janeiro',
						fevereiro: 'Fevereiro',
						marco: 'Março',
						abril: 'Abril',
						maio: 'Maio',
						junho: 'Junho',
						julho: 'Julho',
						agosto: 'Agosto',
						setembro: 'Setembro',
						outubro: 'Outubro',
						novembro: 'Novembro',
						dezembro: 'Dezembro',
					},
					mensalidadeMes: 'Mensalidades por mês',
					sair: 'Sair',
					alterarTema: 'Alterar tema',
					mostrarMeses: 'Mostrar todos os meses',
					integrantes: {
						mostrar: 'Mostrar integrantes',
						ocultar: 'Ocultar integrantes',
					},
				},
			},
		},
	});

export default i18n;
