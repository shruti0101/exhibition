import React from 'react'
import Blogs from './Blogs'

export async function generateMetadata() {
    return {
        title: `Exhibition Stall Designing Blogs | Custom Booth Designer`,
        description: `Professional exhibition stall designing services in India. Creative booth design, fabrication & installation for trade shows and expos.`,
    };
}

export default function page() {
    return (<>
        <Blogs />
    </>)
}
