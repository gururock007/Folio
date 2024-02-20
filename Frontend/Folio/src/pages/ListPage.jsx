import React from 'react'
import { ListComponent } from '../components/ListComponent'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const ListPage = () => {
  return (
    <div>
        <Header />
        <ListComponent url={"http://65.0.168.34/search/booksByGenre/love"} gener={"Your List"}  />
        <ListComponent url={"http://65.0.168.34/search/booksByGenre/love"} gener={ "You may Also Like"}/>
        <ListComponent url={"http://65.0.168.34/search/booksByGenre/love"}  gener={"your"} />
        <Footer />
    </div>
  )
}
