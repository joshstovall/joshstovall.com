var info = {
  'name': 'Joshua Stovall',
  'subtitle': 'Design / Development / Consulting',
  'bio': 'A professional web developer with a wide ranging skillset and an eye for detail, quality and good design.',
  'contact_links': [{
    'name': 'joshstovall.com',
    'website': 'https://joshstovall.com'
  },
  {
    'name': 'github.com',
    'website': 'https://github.com/joshstovall'
  },
  {
    'name': 'linkedin.com',
    'website': 'https://linkedin.com/in/joshstovall'
  },
  {
    'name': 'twitter.com',
    'website': 'https://twitter.com/j_stov'
  }],

  'work_history': [
    {
      'title': 'Lead Software Developer',
      'location': 'Multus Medical',
      'date': '2022 - present',
      'text': `Multus Medical creates accurate, patient-specific anatomical 3D renderings and surgical animations that benefit personal injury patients. I develop and maintain the company's software infrastructure written in C++, Python, and Javascript.`,
      // Manage container orchestration and deployment of our web applications and microservices in production and staging environments, using Docker and Cycle.io
      // Maintain the company's cloud data infrastructure, which includes several million files hosted in S3 storage buckets, database administration using MongoDB, and Orthanc (PACs) DICOM servers
      // Design and implement networking solutions for the Multus office, including a NAS file storage with distributed access via NFS and PostgreSQL database as a shared DaVinci Resolve database for use by our animation team
      // Administrate secure network solutions through VPN connections to radiologist centers and attorneys configured  via IPsec tunnels, developed with IPsense and Microsoft Azure
      // Develop and maintain the company's proprietary 3D modeling software built in C++, designed specifically for Multus' patented radiologic segmentation technology
      // Created a DICOM import plugin for Blender using Geometry Nodes that provides a one-click solution for our animation team to import MRI and CT scans, developed with Python
      // Create anatomically accurate 3D models and surgical animation renderings from MRI scans and radiologist reports`,
      'website': 'https://multusmedical.com'
    },
    {
      'title': 'IT Coordinator & Developer',
      'location': 'High Octane Pictures',
      'date': '2020 - 2022',
      'text': 'High Octane Pictures is a film agency with distribution deals in over 80 countries across the world, over 19 million views on YouTube, and a catalog of hundreds of films streaming on services such as Netflix, Hulu, Amazon, AppleTV, and Fandango.',
      'website': 'https://highoctane.pictures'
    },
    // {
    //   'title': 'Freelance Developer',
    //   'location': 'UK',
    //   'date': '2005 -2013',
    //   'text': 'Providing an affordable design and build solution which allowed many clients to have a unique web presence'
    // }
  ],



  'projects': [
    //   {
    //   'name': 'Love or Money',
    //   'desc': 'Cool React based data visualisation tool and Wordpress Microsite',
    //   'tags': [
    //     'React', 'Wordpress', 'graphs'],

    //   'colors': [
    //     '#E30613', '#00698C', '#737373', '#5CB4EB'],

    //   'image_type': 'tall',
    //   'images': [
    //     'https://joshstovall.com/assets/screens/love_or_money/tool/screen2.png',
    //     'https://joshstovall.com/assets/screens/love_or_money/tool/screen6.png',
    //     'https://joshstovall.com/assets/screens/love_or_money/home.png']
    // },

    // {
    //   'name': 'Marketing Microsite',
    //   'desc': 'Pretty little website to showcase new promotions',
    //   'tags': [
    //     'scroll effects', 'floating nav'],

    //   'colors': [
    //     '#E87722', '#222222'],

    //   'image_type': 'tall',
    //   'images': [
    //     'https://joshstovall.com/assets/screens/inside_track/screen1.PNG',
    //     'https://joshstovall.com/assets/screens/inside_track/screen4.PNG',
    //     'https://joshstovall.com/assets/screens/inside_track/screen9.PNG']
    // },

    {
      'name': 'XR.js',
      'desc': 'about xrjs',
      'tags': ['threejs', 'javascript', 'webxr'],
      'colors': ['#976BBA', '#00BCD4', '#A6C0DC', '#3B3B3A'],
      'image_type': 'tall',
      'images': [
        'https://joshstovall.com/assets/screens/cm/home.png',
        'https://joshstovall.com/assets/screens/cm/me.png',
        'https://joshstovall.com/assets/screens/cm/contact.png']
    },
    {
      'name': 'solfege.ai',
      'desc': 'about solfege ai',
      'tags': ['wordpress', 'corporate', 'accountancy'],
      'colors': ['#DC002E', '#02678E', '#37454E'],
      'image_type': 'tall',
      'images': [
        'https://joshstovall.com/assets/screens/hwca/home.png',
        'https://joshstovall.com/assets/screens/hwca/office-home.png',
        'https://joshstovall.com/assets/screens/hwca/www.hwca.com_about-us_history_.png']
    },
    {
      'name': 'highoctane.pictures',
      'desc': 'about this website',
      'tags': ['wordpress', 'fullscreen', 'music'],
      'colors': ['#3B3B3A', '#58585A', '#B4B4B4'],
      'image_type': 'wide',
      'images': [
        'https://joshstovall.com/assets/screens/blackheart/home.png',
        'https://joshstovall.com/assets/screens/blackheart/menu.png',
        'https://joshstovall.com/assets/screens/blackheart/videos.png']
    },
    // {
    //   'name': 'oscilloscope',
    //   'desc': 'about oscilloscope',
    //   'tags': ['webaudio', 'canvas', 'datavisualization'],
    //   'colors': ['#DC002E', '#02678E', '#37454E'],
    //   'image_type': 'tall',
    //   'images': [
    //     'https://joshstovall.com/assets/screens/hwca/home.png',
    //     'https://joshstovall.com/assets/screens/hwca/office-home.png',
    //     'https://joshstovall.com/assets/screens/hwca/www.hwca.com_about-us_history_.png']
    // },
    {
      'name': 'instrument.bible',
      'desc': 'about instrument.bible',
      'tags': ['electron', 'app distribution', 'product management'],
      'colors': ['#DC002E', '#02678E', '#37454E'],
      'image_type': 'tall',
      'images': [
        'https://joshstovall.com/assets/screens/hwca/home.png',
        'https://joshstovall.com/assets/screens/hwca/office-home.png',
        'https://joshstovall.com/assets/screens/hwca/www.hwca.com_about-us_history_.png']
    }
  ]
};

function ProjectImages(props) {
  return (
    React.createElement("div", { className: "project-images" },
      props.images.map((url, index) => {
        return (
          React.createElement("div", { className: "thumb" },
            React.createElement("img", { className: props.type + ' gallery-' + props.index, "data-featherlight": url, src: url })));
      })));
}

function ProjectColors(props) {
  return (
    React.createElement("div", { className: "color-scheme" },
      props.colors.map((color, index) => {
        return React.createElement("span", { style: { backgroundColor: color } });
      })));
}

function Project(props) {
  var tags = props.project_info.tags;
  var tag_list = tags.map((name, index) => {
    var fname = index === 0 ? name : ' / ' + name;
    return fname;
  });


  return (
    React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-md-4" },
        React.createElement("div", { className: "project-text" },
          React.createElement("div", null, tag_list),
          React.createElement("strong", null, props.project_info.name),
          React.createElement("p", null, props.project_info.desc))),

      React.createElement("div", { className: "col-md-2" },
        React.createElement(ProjectColors, { colors: props.project_info.colors })),

      React.createElement("div", { className: "col-md-6" },
        React.createElement(ProjectImages, { index: props.index, type: props.project_info.image_type, images: props.project_info.images }))));



}

function Projects(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
      React.createElement("div", { className: "container" },
        React.createElement("h1", null, "Recent Projects"),
        React.createElement("hr", null),
        props.info.map(function (project, index) {
          return (
            React.createElement("div", null,
              React.createElement(Project, { index: index, project_info: project }),
              React.createElement("hr", null))
              );
        })
        )
        )
        );
}

function WorkHistory(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
      React.createElement("div", { className: "container" },
        React.createElement("h1", { class: "" }, "Work History"),
        React.createElement("hr", null),
        props.work.map(function (work, index) {
          return (
            React.createElement("div", { className: "work-history" },
              React.createElement("strong", null, work.title), " / ",

              link_html = React.createElement('a', { href: work.website }, work.location)

              // work.location

              , " / ", React.createElement("strong", null, work.date),
              React.createElement("p", null, work.text),
              React.createElement("hr", null)
            )
          );


        }),

        React.createElement('a', { href: './Joshua Stovall Resume.pdf', download: true }, `Download Resume (PDF)`)
      )));

}

function Quote(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
      React.createElement("div", { className: "container" },
        React.createElement("blockquote", { className: "blockquote" },
          React.createElement("p", { className: "mb-0" }, props.text)))));
}



function Header(props) {
  return (
    React.createElement("header", null,
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "row" },
          React.createElement("div", { className: "col-md-6" },
            React.createElement("div", { className: "header-left" },
              React.createElement("h1", { className: "display-4" }, info.name),
              React.createElement("h2", null, info.subtitle))),
          React.createElement("div", { className: "col-md-6" },
            React.createElement("div", { class: "float-md-right" },
              props.links.map(function (link, index) {
                return (
                  React.createElement("span", { class: "float-md-right" },
                    React.createElement('a', { href: link.website, target: '_blank' }, link.name),
                    // dont render slash if last link
                    (index + 1 !== props.links.length) ? " / " : null
                  )
                )
              })

              // contact_links

              // React.createElement("a", { href: "https://joshstovall.com" }, "joshstovall.com"), " / ", React.createElement("a", { href: "https://codepen.io/chrismcnally" }, "codepen.io"), " / ", React.createElement("a", { href: "https://uk.linkedin.com/in/chrismcnally1\n" }, "linkedin.com"), " /", 

              // React.createElement("a", { href: "https://twitter.com/ChrisMcNallyWeb" }, "twitter.com")
            )
          )))));
}

ReactDOM.render(
  React.createElement("div", null,
    React.createElement(Header, { links: info.contact_links }),
    React.createElement(Quote, { text: info.bio }),
    React.createElement(WorkHistory, { work: info.work_history }),
    // React.createElement(Projects, { info: info.projects })
    ),
  document.getElementById('app')
);
