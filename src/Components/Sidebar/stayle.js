import styled from "styled-components";
import cargoLogo from "../../assest/slogo.png"

export const Container = styled.div`
    width: ${({ sidebar }) => sidebar ? '250px' : '50px' };
    height: 100vh;
    background-color: #F9FAFB ;
    flex-direction: column;
    display: flex ;
    padding: 40px 15px;
    overflow-x: scroll;
    overflow: hidden;
    transition: .2s;
`
Container.Inset = styled.div`
    width: 245px;
    height: 100%;

`;
export const Link = styled.div`
    height: 44px ;
    align-items: center  ;
    display: flex ;


    width: 100% ;
    padding-left: 11px ;
    margin-left : ${({ child }) => child && "11px"};

    :hover{
        -webkit-box-shadow: 1px 1px 20px 10px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 1px 1px 20px 10px rgba(34, 60, 80, 0.2);
        box-shadow: 1px 1px 20px 10px rgba(34, 60, 80, 0.2);
        border-radius: 10px ;  
        background-color: #ffffff ;
        transition: all 0.4s ease ;
        cursor:  pointer;
    }
`

export const Title = styled.div`
    color: #374151 ;
`

export const LogoVr = styled.img.attrs({
    src: `${cargoLogo}`
})`
    margin-bottom: 30px ;
    width: 230px;
`
Link.Icon = styled.div`
    font-size: 26px;
`;