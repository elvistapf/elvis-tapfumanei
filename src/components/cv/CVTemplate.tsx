import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 10,
    fontFamily: 'Helvetica',
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
    letterSpacing: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 32,
  },
  contact: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 2,
    textAlign: 'center',
  },
  section: {
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  subsectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 3,
  },
  text: {
    fontSize: 9,
    color: '#333333',
    marginBottom: 3,
  },
  boldText: {
    fontWeight: 'bold',
  },
  bullet: {
    fontSize: 9,
    color: '#333333',
    marginBottom: 2,
    marginLeft: 12,
  },
  jobHeader: {
    marginBottom: 4,
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
  },
  role: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  period: {
    fontSize: 9,
    color: '#666666',
    fontStyle: 'italic',
  },
  skillCategory: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  skillList: {
    fontSize: 9,
    color: '#333333',
    marginBottom: 3,
  },
  highlight: {
    backgroundColor: '#F5F5F5',
    padding: 6,
    marginBottom: 6,
    borderLeftWidth: 2,
    borderLeftColor: '#000000',
  },
});

interface CVTemplateProps {
  data: any;
}

export const CVTemplate: React.FC<CVTemplateProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.contact}>{data.location} | {data.phone} | {data.email}</Text>
        <Text style={styles.contact}>{data.website} | {data.linkedin} | {data.github}</Text>
      </View>

      {/* Executive Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Executive Summary</Text>
        <Text style={styles.text}>{data.executiveSummary}</Text>
      </View>

      {/* Career Highlights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Career Highlights</Text>
        {data.careerHighlights.map((highlight: string, index: number) => (
          <Text key={index} style={styles.bullet}>• {highlight}</Text>
        ))}
      </View>

      {/* Technical Proficiency */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Proficiency</Text>
        {Object.entries(data.technicalProficiency).map(([category, skills]: [string, any], index: number) => (
          <View key={index} style={{ marginBottom: 4 }}>
            <Text style={styles.skillCategory}>{category}:</Text>
            <Text style={styles.skillList}>{skills}</Text>
          </View>
        ))}
      </View>

      {/* Industry Expertise */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Industry Expertise</Text>
        {data.industryExpertise.map((item: any, index: number) => (
          <View key={index} style={{ marginBottom: 4 }}>
            <Text style={styles.skillCategory}>{item.category}:</Text>
            <Text style={styles.skillList}>{item.details}</Text>
          </View>
        ))}
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {data.experience.slice(0, 2).map((job: any, index: number) => (
          <View key={index} style={{ marginBottom: 12 }}>
            <View style={styles.jobHeader}>
              <Text style={styles.company}>{job.company}</Text>
              <Text style={styles.role}>{job.role}</Text>
              <Text style={styles.period}>{job.period} | {job.location}</Text>
            </View>
            <Text style={styles.text}>{job.description}</Text>
            {job.signatureAchievement && (
              <View style={styles.highlight}>
                <Text style={[styles.text, styles.boldText]}>Signature Achievement:</Text>
                <Text style={styles.text}>{job.signatureAchievement}</Text>
              </View>
            )}
            {job.achievements.map((achievement: string, i: number) => (
              <Text key={i} style={styles.bullet}>• {achievement}</Text>
            ))}
            <Text style={[styles.text, { marginTop: 4, fontSize: 8, color: '#666' }]}>
              Tech Stack: {job.techStack}
            </Text>
          </View>
        ))}
      </View>

      {/* Remaining Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Previous Experience</Text>
        {data.experience.slice(2).map((job: any, index: number) => (
          <View key={index} style={{ marginBottom: 8 }}>
            <View style={styles.jobHeader}>
              <Text style={styles.company}>{job.company}</Text>
              <Text style={styles.role}>{job.role}</Text>
              <Text style={styles.period}>{job.period} | {job.location}</Text>
            </View>
            <Text style={styles.text}>{job.description}</Text>
            {job.achievements.map((achievement: string, i: number) => (
              <Text key={i} style={styles.bullet}>• {achievement}</Text>
            ))}
            {job.techStack && (
              <Text style={[styles.text, { marginTop: 4, fontSize: 8, color: '#666' }]}>
                Tech Stack: {job.techStack}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Technical Projects & Ventures */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Projects & Ventures</Text>
        {data.projects.map((project: any, index: number) => (
          <View key={index} style={{ marginBottom: 8 }}>
            <Text style={styles.subsectionTitle}>{project.name}</Text>
            <Text style={[styles.text, { fontSize: 9, fontStyle: 'italic' }]}>{project.status}</Text>
            <Text style={styles.text}>{project.description}</Text>
            {project.impact && <Text style={styles.text}>Impact: {project.impact}</Text>}
          </View>
        ))}
      </View>

      {/* Leadership Competencies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leadership Competencies</Text>
        {data.leadershipCompetencies.map((competency: string, index: number) => (
          <Text key={index} style={styles.bullet}>• {competency}</Text>
        ))}
      </View>

      {/* Education & Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education & Certifications</Text>
        <Text style={styles.subsectionTitle}>In Progress</Text>
        {data.certifications.inProgress.map((cert: string, index: number) => (
          <Text key={index} style={styles.bullet}>• {cert}</Text>
        ))}
        <Text style={[styles.subsectionTitle, { marginTop: 8 }]}>Completed</Text>
        {data.certifications.completed.map((cert: string, index: number) => (
          <Text key={index} style={styles.bullet}>• {cert}</Text>
        ))}
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        {data.languages.map((lang: string, index: number) => (
          <Text key={index} style={styles.bullet}>• {lang}</Text>
        ))}
      </View>

      {/* Ideal Next Role */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ideal Next Role</Text>
        <Text style={styles.text}>{data.idealRole.description}</Text>
        {data.idealRole.preferences.map((pref: string, index: number) => (
          <Text key={index} style={styles.bullet}>• {pref}</Text>
        ))}
        <Text style={[styles.text, { marginTop: 4 }]}>{data.idealRole.opportunities}</Text>
      </View>

      {/* Footer */}
      <View style={{ marginTop: 20, borderTopWidth: 1, borderTopColor: '#E5E5E5', paddingTop: 10 }}>
        <Text style={[styles.text, { fontSize: 8, textAlign: 'center', color: '#666' }]}>
          Portfolio: {data.website} | LinkedIn: {data.linkedin} | GitHub: {data.github}
        </Text>
        <Text style={[styles.text, { fontSize: 8, textAlign: 'center', color: '#666', marginTop: 4 }]}>
          Last updated: February 2026 | Available for immediate start | Open to remote and hybrid opportunities
        </Text>
      </View>
    </Page>
  </Document>
);
