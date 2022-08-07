import Component from '@glimmer/component';

export default class RichPersonIndexComponent extends Component {
  get outputRichData() {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Владимир Христиан (Vladimir Hristian) Сантехник в Германии Hessen Kassel',
      alternateName: 'Vladimir Hristian Hessen Kassel',
      keywords:
        'Владимир Христиан Сантехник в Германии (Vladimir Hristian Deutschland Germany) vladsanteh vlad santeh hessen Kassel Frankfurt Dusseldorf Duseldorf düsseldorf',
      telephone: '+4917641772297',
      image:
        'https://www.vladsanteh.de/images/mobile/background-72dbc60088dca9c82f0e864dd6055c00.jpg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kassel, Hessen Deutschland',
        postalCode: '34117',
        streetAddress: 'Kassel Hessen',
      },
      email: 'vladimir.hristian67@gmail.com',
      faxNumber: '+4917641772297',
      funder: {
        '@type': 'Person',
        url: 'https://www.vladsanteh.de',
        email: 'vladimir.hristian67@gmail.com',
        telephone: '+4917641772297',
        description:
          'Выполню сантехнические работы на самом высоком уровне качества.Имею большой опыт монтажа самого разнообразного оборудования. Использую только лучшие материалы, инструмент и оборудование. Предлагаю самые выгодные расценки на сантехнические работы для своих клиентов. Выполню работу по всей Германии.',
      },
      member: [
        {
          '@type': 'Person',
          url: 'https://www.vladsanteh.de',
          email: 'vladimir.hristian67@gmail.com',
          telephone: '+4917641772297',
          description:
            'Выполню сантехнические работы на самом высоком уровне качества.Имею большой опыт монтажа самого разнообразного оборудования. Использую только лучшие материалы, инструмент и оборудование. Предлагаю самые выгодные расценки на сантехнические работы для своих клиентов. Выполню работу по всей Германии.',
        },
      ],
    });
  }

  get inElement() {
    return document.head;
  }
}
