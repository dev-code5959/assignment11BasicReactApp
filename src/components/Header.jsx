
const Header = () => {
    const menu = ['Home','About','Service','Project']
    return (
        <div>
            <ul>
                {
                    menu.map((item,i)=>{
                        return <li key={i}>{item}</li>
                    })
                }
               
            </ul>
        </div>
    );
};

export default Header;