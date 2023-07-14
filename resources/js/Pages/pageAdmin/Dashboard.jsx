import React from 'react'
import Content from './Layouts/Content';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <>
    <Head title='dashboard'/>
    Ini Dashboard</>
  )
}
Dashboard.layout = (page) => <Content children={page} />;
