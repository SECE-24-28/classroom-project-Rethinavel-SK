import styled from 'styled-components';
export const ContactasStyle = styled.div`
    // display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e94848ff;
    justify-items: left;
    .contact{
    display: flex; 
    flex-direction: column;
    gap: 20px;
    padding: 60px;
    width: 40%;
    }
    .getintouch{
    text-align: left;
    font-size: 3.25rem;
    font-family: worksans, sans-serif;
    font-weight: 700;
    color: #ffffff;
    }
    .sub__heading{
    color: #ffffff;
    font-family: worksans, sans-serif;
    font-size: 1.25rem;
}
    .button{
    border: 2px solid #ffffff;
    padding: 10px 20px;
    background-color: #ffffff;
    border-radius: 30px;
    width: fit-content;
}
    .image{
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    }
    img{
    width: 100%;
    height: auto;
    border-radius: 120px;
    }
`;