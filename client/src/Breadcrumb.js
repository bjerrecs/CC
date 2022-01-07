import { Breadcrumb } from 'react-bootstrap';
import React from 'react';


const CCBreadcrumb = (prop) => {

    return  <Breadcrumb>
                { prop.item0 ? <Breadcrumb.Item>{prop.item0}</Breadcrumb.Item> : '' }
                { prop.item1 ? <Breadcrumb.Item href={prop.item1link}>{prop.item1}</Breadcrumb.Item> : '' }
                { prop.item2 ? <Breadcrumb.Item href={prop.item2link}>{prop.item2}</Breadcrumb.Item> : '' }
                { prop.active ? <Breadcrumb.Item active>{prop.active}</Breadcrumb.Item> : '' } 
            </Breadcrumb>
}

export default CCBreadcrumb