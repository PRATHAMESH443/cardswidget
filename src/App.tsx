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

const titlestyles:any={
  color:'orange',
  display:'flex',
  alignItem:'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
  fontSize:'20px',
  fontWeight: 'bold',
  marginBottom: '0px'
};

const subtitle:any={
  display:'flex',
  alignItem:'center',
  justifyContent: 'center',
  textAlign:'center',
  fontWeight:'100',
  fontSize:'15px',
  margin:'2px 100px 15px 100px'
}

function App() {
  return (
    <div>
     <GetCard 
        data={CardData}
        titlestyles={titlestyles}
        subtitle={subtitle}
        contentdata={contentdata}
     />
    </div>
  );
}

export default App;
