
const Service = () => {
    const login  = true;
    return (
        <div>
            <h3>this is service page</h3>
            {
                login?<button>LogOut</button>:<button>Login</button>
            }
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque pariatur asperiores blanditiis fugit commodi neque iste iusto sit reiciendis distinctio itaque veritatis, harum similique ipsam necessitatibus iure odit excepturi ducimus eos facilis quis natus. Earum aliquid temporibus assumenda cumque ad culpa quibusdam molestias hic eveniet, aspernatur ex ullam enim iusto?</p>
        </div>
    );
};

export default Service;