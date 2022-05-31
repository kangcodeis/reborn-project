import styled from 'styled-components'
import Responsive from './Responsive'

import { Link } from 'react-router-dom'
import Button from './Button'

const HeaderTemplate = styled.div`
    position: fixed;
    width:100%;
    background:#fff;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
`

const Wrapper = styled(Responsive)`
    position: relative; ;
    height:8rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        font-size: 1.125rem;
        letter-spacing: 2px;
    }

    .menu{
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > li {
            margin-left: 0.75rem;
        }

        & > li > a {
            font-size:1.2rem;
        }
    }
`

const Spacer = styled.div`
    height:10rem;
`

const Header = () => {
    return (
        <>
        <HeaderTemplate>
            <Wrapper>
                <h1 className='logo'>
                    get logo
                </h1>
                <ul className='menu'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/board/list">게시판</Link>
                    </li>
                    <li>
                        <Button to="/Login">로그인</Button>
                    </li>
                </ul>
            </Wrapper>
        </HeaderTemplate>
        <Spacer />
        </>
    )
}

export default Header