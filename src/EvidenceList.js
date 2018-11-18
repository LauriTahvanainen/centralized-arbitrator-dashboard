import React from 'react';
import Evidence from './Evidence'

class EvidenceList extends React.Component {
  constructor(props) {
    super(props)
    console.warn("EvidenceList constructor")
    console.log(props)
  }

  evidences = () => {
    console.warn("EVIDENCES")
    console.log(this.props)
    if (!this.props.evidences){
      return (<Evidence name="loading"/>)
    }
    else
    {
      const items = this.props.evidences.map(item => {
        return (<Evidence key={item.name} name={item.name}/>)
      })

      return items
    }

}

  render() {
    return(
      <div>
        <h1>Evidences from {this.props.name}</h1>

        <table className="table table-hover evidence-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>File URI</th>
            </tr>
          </thead>
            {this.evidences()}
        </table>

      </div>
    )
  }

}

export default EvidenceList