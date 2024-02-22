import { useAuth } from "../store/auth"

export const Service = () => {
    const {services} = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-cols">

            {
                services.map((curElem,index) =>{
                    const {price,description,service,provider} = curElem;

                return(
                
                <div className="card" key={index}>
                    <div className="card-img">
                        <img src="../images/login.png" alt="our service image" height="300" width="300"/>
                    </div>

                    <div className="card-details">
                        <div className="grid grid-two-cols">
                            <p>{provider}</p>
                            <p>{price}</p>
                        </div>
                        <h2>{service}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                );
                })}
            </div>
        </section>
    )
}