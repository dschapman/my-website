import React from 'react'
import { graphql } from 'gatsby'
import BrainNote from '../components/BrainNote'

const Brain = ({ data, location }) => {
  return (
    <BrainNote
      note={data.brainNote}
      nodes={data.allMdx.nodes}
      location={location}
    />
  )
}

export const query = graphql`
  query BrainNoteBySlugAndAllMdx($slug: String!) {
    brainNote(slug: { eq: $slug }) {
      slug
      title
      inboundReferences
      childMdx {
        body
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/", ne: "notes" } }) {
      nodes {
        frontmatter {
          tags
          slug
          title
        }
        id
      }
    }
  }
`
export default Brain
