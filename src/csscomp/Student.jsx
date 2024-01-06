import React from 'react'
import PropeTypes from 'prop-types'

const Student = (props) => {
    let {url,rno,name,city} = props;
    return (
        <div>
            <div className="card m-4"  style={{width: "18rem"}}>
                <img src={url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">student name :{name}</h5>
                    <h5 className="card-title">student roll no :{rno}</h5>
                    <p className="card-text">city :{city}</p>      
                </div>
            </div>
        </div>
    )
}
Student.PropeTypes={
    rno : PropeTypes.number.isRequired,
    name : PropeTypes.string.isRequired,
    city : PropeTypes.string.isRequired
}
Student.defaultProps={
    rno:11111,
    name:'enter name',
    city:'enter city'    
}



export default Student