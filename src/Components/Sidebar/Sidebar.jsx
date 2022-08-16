import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import { data } from './data'
import "./stayle.js"
import { Container, Link, LogoVr, Title } from './stayle.js'
export const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [state, setState] = useState(data)

    const listBtn = (id) => {
        if (sidebar){
            setState(state.map((value) => ({
                id: value.id,
                tiitle: value.tiitle,
                child: value.child,
                childHidden: value.id == id ? !value.childHidden : false,
                Icon: value.Icon
            })))
        }
    }

    const sidebarFunc = () => {
        setSidebar(!sidebar)
        setState(state.map((value) => ({
            id: value.id,
            tiitle: value.tiitle,
            child: value.child,
            childHidden: false,
            Icon: value.Icon
        })))
    }


    return (
        <Container scroll='no' sidebar={sidebar}>
            <Container.Inset>
                <LogoVr onClick={() => sidebarFunc()} />

                {state.map((value) => (
                    <div>
                        <Link onClick={() => listBtn(value.id)} key={value.id}><Link.Icon>{value?.Icon} </Link.Icon> {value.tiitle} </Link>
                        {value.childHidden &&
                            value.child.map((v) => (
                                <div>
                                    {v.title}
                                </div>
                            ))
                        }
                    </div>
                ))}
            </Container.Inset>


        </Container>
    )
}
