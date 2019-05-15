export default {
  items: [
    {
      title: true,
      name: 'Filters',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Type',
      class: 'font-12 font-weight-700',
      children: [
        {
          name: 'Intraday',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Delivery',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        }
      ]
    },
    {
      name: 'Segment',
      class: 'font-12 font-weight-700',
      children: [
        {
          name: 'Futures',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Cash Equity',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Options',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Commodity',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        }
      ]
    },
    {
      name: 'Exchange',
      class: 'font-12 font-weight-700',
      children: [
        {
          name: 'NSE',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'BSE',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'MCX',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        }
      ]
    },
    {
      name: 'Rating',
      class: 'font-12 font-weight-700',
      children: [
        {
          name: 'Above 4.5',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: '3 to 4.5',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Below 3',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        }
      ]
    },
    {
      name: 'Strategy Type',
      class: 'font-12 font-weight-700',
      children: [
        {
          name: 'Indicator',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Non-Indicator',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Data Analysis',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Combination',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        }
      ]
    },
    {
      name: 'Profile',
      class: 'font-12 font-weight-700',
      children: [
        {
          name: 'Last 3 Months',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Last 3 Weeks',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'Last 3 Days',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        },
        {
          name: 'High Risk High ROI',
          //icon: 'icon-lock-open',
          class: 'font-12 font-weight-700'
        }
      ]
    },
    {
      name: 'Volume',
      class: 'font-12 font-weight-700',
      children: [
        {
          name: 'AB Volume',
          //icon: 'icon-note',
          class: 'font-12 font-weight-700'
        }
      ]
    }
  ],
};
