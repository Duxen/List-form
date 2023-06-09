import React, { useState } from 'react';
import PartnerForm from './PartnerForm';
import PartnerList from './PartnerList';
import { partnersData } from './data/partnersData';
import { addPartnerService } from './services/addPartnerService';
import { Container } from 'react-bootstrap';
import SearchBar from '../search-bar/SearchBar';

const PartnerContainer = () => {
  const [partners, setPartners] = useState(partnersData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPartner = (newPartner) => {
    setPartners([...partners, newPartner]);
  };

  const handleSubmit = (partner) => {
    handleAddPartner(partner)
    addPartnerService(partner)
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };


  const filteredPartners = partners.filter((partner) => {
    const partnerName = partner.name.toLowerCase();
    const partnerEmail = partner.email.toLowerCase();
    const search = searchTerm.toLowerCase();

    return partnerName.includes(search) || partnerEmail.includes(search);
  });


  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
        <h3 className='mb-4'>Agregar Colaboradores</h3>
        <PartnerForm onSubmit={handleSubmit} />
        <PartnerList partners={filteredPartners} />
    </Container>
  );
}

export default PartnerContainer;