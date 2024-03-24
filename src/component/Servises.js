import styled from "styled-components"
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export const Servises = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-three-column">
                    <div className="services-1">
                        <div>
                            <TbTruckDelivery className="icon" />
                            <h3>Super Fast and Free Delivery</h3>
                        </div>
                    </div>

                    <div className="services-2">
                        <div className="services-colum-2">
                            <div>
                                <MdSecurity className="icon" />
                                <h3>Non-contact shipping</h3>
                            </div>
                        </div>
                        <div className="services-colum-2">
                            <div>
                                <GiReceiveMoney className="icon" />
                                <h3>Money-back Guaranteed</h3>
                            </div>
                        </div>
                    </div>

                    <div className="services-3">
                        <div>
                            <RiSecurePaymentLine className="icon" />
                            <h3>Money-back Guaranteed</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
padding:5rem 0;

.services-1 div{
    background:${({theme})=>theme.colors.bg};
    padding:8em 2em;
    border-radius:5px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap:20px;
}

.icon{
    font-size:3em;
    color:rgb(98 84 243);
    position: relative;
}


.services-colum-2 div{
    background:${({theme})=>theme.colors.bg};
    padding:2em 2em;
    border-radius:5px;
    display:flex;
    justify-content:center;
    gap:20px;
    align-items:center;
    margin-top:3em;
}

.services-3 div{
    background:${({theme})=>theme.colors.bg};
    padding:8em 2em;
    border-radius:5px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    gap:20px;
    align-items:center;
}

`