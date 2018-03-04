export default {
  header: '색상 (Colors)',
  headerText: '**stylus** 와 **javascript** 를 통해 [Material Design spec](https://material.io/guidelines/style/color.html) 에 있는 모든 색상을 바로 사용할 수 있습니다. 이 값들은 스타일 시트, 컴포넌트 파일 그리고 실제 컴포넌트 안에서 **color class*시스템을 통해 사용될 수 있습니다.',
  classesHeader: '클래스',
  classesText: '메테리얼 디자인 스펙의 각 색상은 어플리케이션 내에서의 클래스를 이용한 스타일 지정을 위해서 **background** 와 **text** 변형으로 변환됩니다. 예) `<div class="red">` 또는 `<span class="red--text">`. 이 색상 클래스는 [여기](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl)에 정의되어 있습니다.',
  classesText2: '텍스트 색상 역시 **어둡게(darken)** 와 **밝게(lighten)** 만드는 변형(variants)을 `text--{lighten|darken}-{n}` 형식으로 지원합니다. ',
  javascriptPackHeader: '자바스크립트 색상 팩(Javascript color pack)',
  javascriptPackText: 'Vuetify는 추가로 어플리케이션 내에서 임포트(import) 해서 사용할 수 있는 자바스크립트 색상 팩을 지원합니다. 이는 어플리케이션 테마를 정의하는데 사용될 수도 있습니다.',
  stylusPackHeader: '스타일러스 색상 팩(Stylus color pack)',
  stylusPackText: '편의상 색상팩을 사용하면 export 되는 css 사이즈가 ~30kb 정도 증가합니다. 어떤 프로젝트들은 Vuetify 부트스트랩에 의해 런타임에 기본적으로 생성되는 클래스를 사용하는 것으로 충분할 겁니다. 이 기능을 비활성하려면 _수동으로_ import하고 메인 **stylus** 파일을 생성해야만 합니다. 이를 위해서 [stylus loader](https://github.com/shama/stylus-loader)와 `.style` 파일 엔트리(file entry)가 필요합니다.',
  stylusPackText2: '생성된 `main.styl` 파일을 프로젝트에 포함해야 합니다.',
  alert: '반드시 `stylus`를 사용할 수 있도록 웹팩(webpack)을 설정하세요. [Vuetify에서 제공하는 미리 만들어진 템플릿](/getting-started/quick-start#new-applications)들을 사용하고 있다면 이미 그렇게 설정되어 있을 것입니다.',
  stylusPackText3: '메인 **App.vue** 에서 `main.style`를 바로 로딩할 수도 있습니다. 이 방법은 엔트리 파일이 변경될때 마다 스타일러스 파일을 재생성하기 때문에, 프로젝트 설정에 따라 빌드 시간이 (_아마도_) 늘어날 수 있다는 점을 기억하세요.',
  colorHeader: '메테리얼 색상표 (Material colors)',
  colorText: '아래 리스트는 주색상으로 묶은 메테리얼 디자인 색상 팔레트 입니다.',
  toc: [
    {
      text: '소개',
      href: 'introduction'
    },
    {
      text: '클래스',
      href: 'classes'
    },
    {
      text: '자바스크립트 색상 팩',
      href: 'javascript-color-pack'
    },
    {
      text: '스타일러스 색상 팩',
      href: 'stylus-color-pack'
    },
    {
      text: '메테리얼 색상표',
      href: 'material-colors'
    }
  ]
}
