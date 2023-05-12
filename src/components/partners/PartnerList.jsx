import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PartnerList = ({ partners }) => {

  const displayPartner = (partner) => {
    return `${partner.name} - ${partner.email}`;
  };

  return (
    <div className='PartnerList mt-5'>
      <h2>Lista de Colaboradores</h2>
      <ListGroup>
        {partners.map((partner) => (
          <ListGroup.Item className='border-bottom 1px' key={partner.id}>
            {displayPartner(partner)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default PartnerList;