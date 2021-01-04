import React from 'react'
import { Container, Title, Text, TextSmall, Link, Table } from './styles/plans'

export default function Plan({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Plan.Title = function PlanTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Plan.Text = function PlanText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Plan.Table = function PlanTable({ children, ...restProps }) {
  return <Table {...restProps}>{children}</Table>
}

Plan.TextSmall = function PlanTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

Plan.Link = function PlanLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
