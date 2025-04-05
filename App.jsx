import { LearnComponents } from "./components/LearnComponents" 
import { Header } from "./components/Header"
import { Students} from "./components/Students"
import { ArraySamples } from "./components/ArraySamples"
import { MultitypeComponent } from "./components/MultitypeComponent"
import { SampleOne } from "./components/SampleOne"
import { FunctionSamples } from "./components/functionSamples"
import "./css/mycss.css"
import { ChildComponents } from "./components/childcomponents"

function App() {

 const Items=[
              {id:1, name:"item1"},
              {id:2, name:"item2"},
              {id:3, name:"item3"},
            ];

const HandelClick = ()=>{
  alert("Button Clicked !")
}

  return (
    <>
    
    <div>React Class 1</div>
    <LearnComponents/> 
  <Header/>
    <Students Name="Rehal" Age={25} isMarried={true}/>
    <Students Name="Test1" Age={25} isMarried={false}/>
    <Students Name="Test2" Age={25} isMarried={true}/>
    <Students />

    <ChildComponents>
      <p>Paragraph1</p>
      <p>Paragraph2</p>
      <p>Paragraph3</p>
      
    </ChildComponents> 
    <ArraySamples item={Items}/>
    <SampleOne color='Green'/>
    <MultitypeComponent value="Hello"/>
<MultitypeComponent value={18}/>
<MultitypeComponent value={true}/>

   
    <div>
  <h2>Parent Class</h2>
  <FunctionSamples handelclick={HandelClick} name="surendar" />

</div>
    </>
  )
}

export default App
