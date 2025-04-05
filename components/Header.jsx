
export const Header = () => {
    let customCss="error";
    const isLoggedIn=false;
    const greetings=isLoggedIn ? <p>LoggedInSuccessFull</p> :<p>LoggedInFails Please LoginBack</p>;
    const listItems=["item1","item2","item3"];

  return (
    <>

<h1 className="bannerText">React Header</h1>
<p className="myText">Learn React</p>
{/* JavaScrit Expressions injsx */}


<p className={customCss} style={{ fontSize:'25px',fontStyle:'italic' }}>18+25={18+25}</p>

{/* jsx With Conditional Rendering*/}
{greetings}

{/* jsx With List*/}
<ul>
    {listItems.map((listItems,index) => (<li key={index}>{listItems}</li>))}
</ul>


    </>
  )
}
