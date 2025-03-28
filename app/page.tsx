"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Server,
  Cloud,
  Database,
  Code,
  Award,
  FileCode,
  Cpu,
  Moon,
  Sun,
  Palette,
  Brain,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const observerRefs = useRef<IntersectionObserver[]>([])

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Setup intersection observers for each section
  useEffect(() => {
    const sections = ["about", "skills", "certifications", "achievements", "contact"]

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section)
          }
        },
        { threshold: 0.3 },
      )

      const element = document.getElementById(section)
      if (element) observer.observe(element)
      observerRefs.current.push(observer)
    })

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect())
    }
  }, [mounted])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-background font-mono relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]"
          style={{
            animation: "float 15s ease-in-out infinite",
          }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] rounded-full bg-primary/10 blur-[80px]"
          style={{
            animation: "float 20s ease-in-out infinite reverse",
          }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-[40%] left-[30%] w-[200px] h-[200px] rounded-full bg-primary/5 blur-[120px]"
          style={{
            animation: "float 18s ease-in-out infinite 2s",
          }}
        ></motion.div>

        {/* Grid lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
        ></motion.div>

        {/* Code-like elements */}
        <div className="hidden lg:block absolute top-[15%] right-[15%] text-primary/10 text-xs">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.15, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="opacity-[0.15]"
            >
              {`const deploy${i} = async () => {`}
              <br />
              {`  await infrastructure.provision();`}
              <br />
              {`  return pipeline.execute();`}
              <br />
              {`};`}
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block absolute bottom-[20%] left-[10%] text-primary/10 text-xs">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.15, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
              className="opacity-[0.15]"
            >
              {`function monitor${i}() {`}
              <br />
              {`  alerts.configure();`}
              <br />
              {`  metrics.collect();`}
              <br />
              {`};`}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-10 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-xl flex items-center gap-2"
          >
            <Terminal className="h-5 w-5 text-primary" />
            <span>dev@portfolio:~$</span>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["about", "skills", "certifications", "achievements", "contact"].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? "text-primary" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="h-0.5 bg-primary mt-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Button variant="outline" size="sm" className="md:hidden">
              <Code className="h-4 w-4 mr-2" />
              Menu
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="container py-8 md:py-12 relative z-1">
        {/* Hero Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="py-8 md:py-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <motion.div variants={slideInFromLeft} className="md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/10">
              <Image src="/placeholder.svg?height=250&width=250" alt="Profile" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              <motion.div
                animate={{
                  boxShadow: ["0 0 0 0px rgba(var(--primary-rgb), 0.3)", "0 0 0 10px rgba(var(--primary-rgb), 0)"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  repeatType: "loop",
                }}
                className="absolute inset-0 rounded-full"
              />
            </div>
          </motion.div>
          <motion.div variants={slideInFromRight} className="md:w-2/3">
            <div className="mb-4 flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                className="h-3 w-3 rounded-full bg-red-500"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                className="h-3 w-3 rounded-full bg-yellow-500"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                className="h-3 w-3 rounded-full bg-green-500"
              ></motion.div>
            </div>
            <motion.div variants={fadeIn} className="p-4 rounded-lg bg-muted/50 border border-border backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-primary mb-2"
              >
                $ whoami
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-2">
                Alex Jenkins
              </motion.h1>
              <motion.h2 variants={fadeIn} className="text-xl md:text-2xl text-primary mb-4">
                Senior DevOps Engineer
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-6 leading-relaxed">
                I architect and automate scalable infrastructure, streamline CI/CD pipelines, and implement robust
                monitoring solutions. With 7+ years of experience, I specialize in cloud-native technologies,
                containerization, and infrastructure as code.
              </motion.p>
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex gap-4">
                <motion.div variants={scaleIn}>
                  <Button className="group relative overflow-hidden">
                    <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <FileCode className="mr-2 h-4 w-4 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">Download CV</span>
                  </Button>
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Button variant="outline" className="group relative overflow-hidden">
                    <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <Terminal className="mr-2 h-4 w-4 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">Contact Me</span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="py-8 md:py-12 border-t border-border"
        >
          <motion.div variants={slideInFromLeft} className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Technical Skills</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Cloud className="h-5 w-5 text-primary" />,
                title: "Cloud Platforms",
                items: [
                  { name: "AWS", logo: "/logos/aws.svg" },
                  { name: "Google Cloud", logo: "/logos/gcp.svg" },
                  { name: "Azure", logo: "/logos/azure.svg" },
                  { name: "DigitalOcean", logo: "/logos/digitalocean.svg" },
                  { name: "Linode", logo: "/logos/linode.svg" },
                ],
              },
              {
                icon: <Server className="h-5 w-5 text-primary" />,
                title: "Infrastructure as Code",
                items: [
                  { name: "Terraform", logo: "/logos/terraform.svg" },
                  { name: "CloudFormation", logo: "/logos/cloudformation.svg" },
                  { name: "Pulumi", logo: "/logos/pulumi.svg" },
                  { name: "Ansible", logo: "/logos/ansible.svg" },
                  { name: "Chef", logo: "/logos/chef.svg" },
                ],
              },
              {
                icon: <Cpu className="h-5 w-5 text-primary" />,
                title: "Containerization",
                items: [
                  { name: "Docker", logo: "/logos/docker.svg" },
                  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
                  { name: "Helm", logo: "/logos/helm.svg" },
                  { name: "OpenShift", logo: "/logos/openshift.svg" },
                  { name: "Podman", logo: "/logos/podman.svg" },
                ],
              },
              {
                icon: <Code className="h-5 w-5 text-primary" />,
                title: "CI/CD",
                items: [
                  { name: "Jenkins", logo: "/logos/jenkins.svg" },
                  { name: "GitHub Actions", logo: "/logos/github-actions.svg" },
                  { name: "GitLab CI", logo: "/logos/gitlab.svg" },
                  { name: "CircleCI", logo: "/logos/circleci.svg" },
                  { name: "ArgoCD", logo: "/logos/argocd.svg" },
                ],
              },
              {
                icon: <Database className="h-5 w-5 text-primary" />,
                title: "Databases & Caching",
                items: [
                  { name: "MongoDB", logo: "/logos/mongodb.svg" },
                  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
                  { name: "Redis", logo: "/logos/redis.svg" },
                  { name: "Elasticsearch", logo: "/logos/elasticsearch.svg" },
                  { name: "DynamoDB", logo: "/logos/dynamodb.svg" },
                ],
              },
              {
                icon: <Terminal className="h-5 w-5 text-primary" />,
                title: "Scripting & Languages",
                items: [
                  { name: "Bash", logo: "/logos/bash.svg" },
                  { name: "Python", logo: "/logos/python.svg" },
                  { name: "Go", logo: "/logos/go.svg" },
                  { name: "JavaScript", logo: "/logos/javascript.svg" },
                  { name: "YAML/JSON", logo: "/logos/yaml.svg" },
                ],
              },
              {
                icon: <Palette className="h-5 w-5 text-primary" />,
                title: "Design & Visualization",
                items: [
                  { name: "Figma", logo: "/logos/figma.svg" },
                  { name: "Draw.io", logo: "/logos/drawio.svg" },
                  { name: "Lucidchart", logo: "/logos/lucidchart.svg" },
                  { name: "Grafana", logo: "/logos/grafana.svg" },
                  { name: "D3.js", logo: "/logos/d3.svg" },
                ],
              },
              {
                icon: <Brain className="h-5 w-5 text-primary" />,
                title: "GenAI & LLM",
                items: [
                  { name: "OpenAI", logo: "/logos/openai.svg" },
                  { name: "Hugging Face", logo: "/logos/huggingface.svg" },
                  { name: "LangChain", logo: "/logos/langchain.svg" },
                  { name: "LlamaIndex", logo: "/logos/llamaindex.svg" },
                  { name: "Anthropic", logo: "/logos/anthropic.svg" },
                ],
              },
            ].map((skill, index) => (
              <motion.div key={skill.title} variants={scaleIn}>
                <SkillCard icon={skill.icon} title={skill.title} items={skill.items} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-8 p-4 rounded-lg bg-muted/50 border border-border backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-sm text-primary mb-2"
            >
              $ ls -la tools/
            </motion.div>
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
              {[
                "Prometheus",
                "Grafana",
                "ELK Stack",
                "Datadog",
                "New Relic",
                "Nginx",
                "HAProxy",
                "Istio",
                "Vault",
                "Consul",
                "Git",
                "Jira",
                "Confluence",
                "Slack",
                "PagerDuty",
                "AWS Lambda",
                "S3",
                "EC2",
                "RDS",
                "CloudFront",
                "GKE",
                "GCE",
                "Cloud Functions",
                "BigQuery",
                "Cloud Storage",
                "Azure AKS",
                "Azure Functions",
                "Cosmos DB",
                "Blob Storage",
                "Azure DevOps",
              ].map((tool, index) => (
                <motion.div key={tool} variants={scaleIn} custom={index}>
                  <Badge variant="outline" className="bg-background/50 hover:bg-primary/10 transition-colors">
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="py-8 md:py-12 border-t border-border"
        >
          <motion.div variants={slideInFromLeft} className="flex items-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Certified DevOps Engineer - Professional",
                issuer: "Amazon Web Services",
                date: "2023",
                image: "/logos/aws-cert.svg",
              },
              {
                title: "Certified Kubernetes Administrator (CKA)",
                issuer: "Cloud Native Computing Foundation",
                date: "2022",
                image: "/logos/kubernetes-cert.svg",
              },
              {
                title: "Google Professional Cloud DevOps Engineer",
                issuer: "Google Cloud",
                date: "2022",
                image: "/logos/gcp-cert.svg",
              },
              {
                title: "Microsoft Certified: DevOps Engineer Expert",
                issuer: "Microsoft",
                date: "2021",
                image: "/logos/azure-cert.svg",
              },
              {
                title: "HashiCorp Certified: Terraform Associate",
                issuer: "HashiCorp",
                date: "2021",
                image: "/logos/terraform-cert.svg",
              },
              {
                title: "Docker Certified Associate",
                issuer: "Docker, Inc.",
                date: "2020",
                image: "/logos/docker-cert.svg",
              },
            ].map((cert, index) => (
              <motion.div key={cert.title} variants={scaleIn}>
                <CertificationCard title={cert.title} issuer={cert.issuer} date={cert.date} image={cert.image} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          id="achievements"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="py-8 md:py-12 border-t border-border"
        >
          <motion.div variants={slideInFromLeft} className="flex items-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Achievements</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            {[
              {
                title: "Reduced Infrastructure Costs by 40%",
                organization: "FinTech Corp, 2023",
                description:
                  "Implemented auto-scaling and spot instances strategy, optimized resource utilization, and migrated legacy systems to containerized microservices.",
              },
              {
                title: "Decreased Deployment Time from Days to Minutes",
                organization: "E-commerce Platform, 2022",
                description:
                  "Designed and implemented a fully automated CI/CD pipeline with zero-downtime deployments, comprehensive testing, and automated rollbacks.",
              },
              {
                title: "Open Source Contributor",
                organization: "Kubernetes Community",
                description:
                  "Active contributor to Kubernetes ecosystem with multiple accepted PRs. Created and maintained several popular DevOps tools with over 1000+ GitHub stars.",
              },
              {
                title: "Speaker at DevOps Summit",
                organization: "International DevOps Conference, 2022",
                description:
                  "Presented on 'Scaling Kubernetes in Production: Lessons Learned' to an audience of 500+ DevOps professionals.",
              },
            ].map((achievement, index) => (
              <motion.div key={achievement.title} variants={fadeIn}>
                <AchievementCard
                  title={achievement.title}
                  organization={achievement.organization}
                  description={achievement.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="py-8 md:py-12 border-t border-border"
        >
          <motion.div variants={slideInFromLeft} className="flex items-center gap-2 mb-8">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Get In Touch</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={slideInFromLeft} className="space-y-6">
              <motion.div
                variants={fadeIn}
                className="p-4 rounded-lg bg-muted/50 border border-border backdrop-blur-sm"
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-primary mb-2"
                >
                  $ cat contact_info.txt
                </motion.div>
                <motion.p variants={fadeIn} className="text-muted-foreground mb-4">
                  I'm currently available for DevOps consulting, architecture design, and implementation projects. Let's
                  discuss how I can help optimize your infrastructure and deployment processes.
                </motion.p>
                <motion.div variants={staggerContainer} className="flex flex-col space-y-3">
                  {[
                    {
                      href: "mailto:alex@devops.example",
                      icon: <Mail size={18} className="group-hover:animate-pulse" />,
                      text: "alex@devops.example",
                    },
                    {
                      href: "https://github.com",
                      icon: <Github size={18} className="group-hover:animate-pulse" />,
                      text: "github.com/alexdevops",
                    },
                    {
                      href: "https://linkedin.com",
                      icon: <Linkedin size={18} className="group-hover:animate-pulse" />,
                      text: "linkedin.com/in/alexdevops",
                    },
                  ].map((link, index) => (
                    <motion.a
                      key={link.href}
                      variants={fadeIn}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-primary hover:underline group"
                    >
                      {link.icon}
                      {link.text}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="p-4 rounded-lg bg-muted/50 border border-border backdrop-blur-sm"
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-primary mb-2"
                >
                  $ uptime
                </motion.div>
                <motion.div variants={fadeIn} className="text-sm">
                  <p>
                    System uptime: {Math.floor(Math.random() * 365)} days, {Math.floor(Math.random() * 24)} hours
                  </p>
                  <p>Response time: Usually within 24 hours</p>
                  <p>Location: Remote / San Francisco, CA</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInFromRight}
              className="p-6 rounded-lg border border-border bg-muted/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  className="h-3 w-3 rounded-full bg-red-500"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  className="h-3 w-3 rounded-full bg-yellow-500"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  className="h-3 w-3 rounded-full bg-green-500"
                ></motion.div>
                <div className="text-xs text-muted-foreground">contact_form.sh</div>
              </div>
              <motion.form variants={staggerContainer} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={fadeIn} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-1">
                      <Terminal className="h-3 w-3" />
                      NAME
                    </label>
                    <input
                      id="name"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-1">
                      <Terminal className="h-3 w-3" />
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium flex items-center gap-1">
                    <Terminal className="h-3 w-3" />
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-1">
                    <Terminal className="h-3 w-3" />
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="I'd like to discuss a DevOps project..."
                  />
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Button className="w-full group relative overflow-hidden">
                    <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <Terminal className="mr-2 h-4 w-4 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">./submit_form.sh</span>
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-t border-border py-6 md:py-8 bg-muted/30 relative z-1"
      >
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Alex Jenkins. All rights
            reserved."
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:alex@devops.example"
              aria-label="Email"
              className="hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: { name: string; logo: string }[]
}) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border-border hover:shadow-md hover:shadow-primary/5 transition-all backdrop-blur-sm h-full">
        <CardContent className="p-0">
          <div className="p-2 border-b border-border bg-muted/30 flex items-center gap-2">
            {icon}
            <h3 className="font-semibold text-sm">{title}</h3>
          </div>
          <div className="p-3">
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  className="flex flex-col items-center gap-1 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-background p-1 border border-border group-hover:border-primary/50 transition-colors">
                    <TechLogo name={item.name} logo={item.logo} />
                  </div>
                  <span className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function TechLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-xs">
        {name.charAt(0)}
      </div>
      <Image
        src={logo || "/placeholder.svg"}
        alt={name}
        width={16}
        height={16}
        className="object-contain relative z-1"
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.display = "none"
        }}
      />
    </div>
  )
}

function CertificationCard({
  title,
  issuer,
  date,
  image,
}: {
  title: string
  issuer: string
  date: string
  image: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border-border hover:shadow-md hover:shadow-primary/5 transition-all backdrop-blur-sm h-full">
        <CardContent className="p-0">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden border border-border bg-background flex items-center justify-center">
              <Image
                src={image || "/placeholder.svg"}
                alt={issuer}
                width={40}
                height={40}
                className="object-contain"
                onError={(e) => {
                  // Show a fallback on error
                  ;(e.target as HTMLImageElement).style.display = "none"
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground">{issuer}</p>
            </div>
          </div>
          <div className="p-3 flex justify-between items-center">
            <Badge variant="outline" className="text-xs">
              {date}
            </Badge>
            <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
              Verify
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function AchievementCard({
  title,
  organization,
  description,
}: {
  title: string
  organization: string
  description: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border-border hover:shadow-md hover:shadow-primary/5 transition-all backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="p-4 border-b border-border bg-muted/30">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-primary">{organization}</p>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

