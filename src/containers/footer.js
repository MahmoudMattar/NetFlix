import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title href="/contact">Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="/faq">FAQ</Footer.Link>
          <Footer.Link href="https://ir.netflix.net/ir-overview/profile/default.aspx">
            Investor Relations
          </Footer.Link>
          <Footer.Link href="/privacy">Privacy</Footer.Link>
          <Footer.Link href="https://fast.com/">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/en/">
            Help Centre
          </Footer.Link>
          <Footer.Link href="https://jobs.netflix.com/">Jobs</Footer.Link>
          <Footer.Link href="/privacy">Cookie Preferences</Footer.Link>
          <Footer.Link href="/legal">Legal Notices</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="/account">Account</Footer.Link>
          <Footer.Link href="https://www.netflix.com/watch">
            Ways to Watch
          </Footer.Link>
          <Footer.Link href="/corporateInfo">Corporate Information</Footer.Link>
          <Footer.Link href="/netflix_original">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://media.netflix.com/en/">
            Media Center
          </Footer.Link>
          <Footer.Link href="/terms">Terms of Use</Footer.Link>
          <Footer.Link href="/contact">Contact Us</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Egypt</Footer.Text>
    </Footer>
  )
}
