import { orange } from '@material-ui/core/colors';
import React from 'react';
import GetCard from './Card-widget';

const CardData=[{
  title:"WE BRING THE BEST THINGS",
  subtitle:"Embrace a blockchain-powered platform to issue digital certificates, manage training batches, and simplify placement processes and having the best service"
},
];

const contentdata=[{
  header:"01.",
  title:"Optimize Processing",
  description:"Simplify and automate student registration and certification."
},
{
  header:"02.",
  title:"Optimize Processing",
  description:"Simplify and automate student registration and certification."
},
{
  header:"03.",
  title:"Optimize Processing",
  description:"Simplify and automate student registration and certification."
},
{
  header:"04.",
  title:"Optimize Processing",
  description:"Simplify and automate student registration and certification."
}];

const titleStyles:any={
  color:'orange',
  display:'flex',
  alignItem:'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
  fontSize:'20px',
  fontWeight: 'bold',
  marginBottom: '0px'
};

const subtitleStyles:any={
  display:'flex',
  alignItem:'center',
  justifyContent: 'center',
  textAlign:'center',
  fontWeight:'100',
  fontSize:'15px',
  margin:'2px 100px 15px 100px'
}

const ContentHeaderStyles:any={
  fontWeight:'bold',
  color:'orange'
}

const ContentTitleStyles:any={
  fontWeight:'bold',
  color:'black',
  textTransform: 'uppercase'
}


function App() {
  return (
    <div>
     <GetCard 
        data={CardData}
        titleStyles={titleStyles}
        subtitleStyles={subtitleStyles}
        contentdata={contentdata}
        ContentHeaderStyles={ContentHeaderStyles}
        ContentTitleStyles={ContentTitleStyles}
     />
    </div>
  );
}

export default App;
