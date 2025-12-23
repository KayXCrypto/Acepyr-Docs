import React from "react";
import "../styles/Section.css";

const SystemArchitecture = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge badge-purple">Architecture</span>
        <h1>System Architecture</h1>
        <p className="lead">
          Deep dive into Acepyr's technical architecture, design patterns, 
          and infrastructure that powers behavioral intelligence at scale.
        </p>
      </header>

      <section id="architecture-overview">
        <h2>Architecture Overview</h2>
        <p>
          Acepyr is built on a modern microservices architecture designed for high availability, 
          scalability, and fault tolerance. Our system processes millions of behavioral events 
          per second with sub-20ms latency.
        </p>

        <div className="architecture-diagram">
          <pre className="diagram-text">{`
┌─────────────────────────────────────────────────────────┐
│                     Client Layer                        │
│  Web SDK  │  Mobile SDK  │  Server SDK  │  REST API    │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                   API Gateway Layer                     │
│  Load Balancer  │  Rate Limiter  │  Authentication     │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                  Service Mesh Layer                     │
├──────────────┬──────────────┬──────────────┬───────────┤
│   Ingestion  │  Processing  │ Intelligence │  Storage  │
│   Service    │   Service    │   Service    │  Service  │
└──────────────┴──────────────┴──────────────┴───────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                   Data Layer                            │
│  PostgreSQL  │  Redis  │  Kafka  │  ClickHouse  │ S3   │
└─────────────────────────────────────────────────────────┘
          `}</pre>
        </div>

        <div className="architecture-layers">
          <div className="layer-card">
            <h3>Client Layer</h3>
            <p>Multiple SDKs and APIs for different platforms and use cases.</p>
          </div>
          <div className="layer-card">
            <h3>Gateway Layer</h3>
            <p>Load balancing, rate limiting, authentication, and request routing.</p>
          </div>
          <div className="layer-card">
            <h3>Service Layer</h3>
            <p>Microservices handling ingestion, processing, intelligence, and storage.</p>
          </div>
          <div className="layer-card">
            <h3>Data Layer</h3>
            <p>Distributed databases and message queues for real-time data processing.</p>
          </div>
        </div>
      </section>

      <section id="design-patterns">
        <h2>Design Patterns</h2>

        <div className="pattern-section">
          <h3>Event-Driven Architecture</h3>
          <p>
            All behavioral data flows through an event-driven system using Apache Kafka 
            as the backbone. This enables real-time processing and ensures data consistency.
          </p>
          <div className="code-block">
            <pre>{`// Event flow example
Client → API Gateway → Kafka Topic → Stream Processor → Data Store
                              ↓
                        Real-time Analytics
                              ↓
                        ML Model Inference`}</pre>
          </div>
        </div>

        <div className="pattern-section">
          <h3>CQRS (Command Query Responsibility Segregation)</h3>
          <p>
            We separate write operations (commands) from read operations (queries) 
            to optimize for both high-throughput writes and low-latency reads.
          </p>
          <div className="pattern-diagram">
            <pre>{`
Write Path:
Client → Command API → Event Store → Kafka → Write DB

Read Path:
Client → Query API → Read Replica → Cache → Response
            `}</pre>
          </div>
        </div>

        <div className="pattern-section">
          <h3>Circuit Breaker Pattern</h3>
          <p>
            Protects downstream services from cascading failures. When a service fails, 
            the circuit breaker opens and prevents additional requests.
          </p>
          <div className="code-block">
            <pre>{`const circuitBreaker = new CircuitBreaker({
  timeout: 3000,
  errorThreshold: 50,
  resetTimeout: 30000
});

// Wrapped service call
const result = await circuitBreaker.call(
  () => intelligenceService.analyze(data)
);`}</pre>
          </div>
        </div>

        <div className="pattern-section">
          <h3>Saga Pattern</h3>
          <p>
            Manages distributed transactions across multiple microservices. 
            Each transaction is a sequence of local transactions with compensating actions.
          </p>
        </div>
      </section>

      <section id="service-communication">
        <h3>Service Communication</h3>

        <div className="communication-types">
          <div className="comm-card">
            <h4>Synchronous (REST)</h4>
            <p>Used for request-response patterns and external API calls.</p>
            <div className="code-block">
              <pre>{`POST /api/v2/behavioral/track
Content-Type: application/json

{
  "event_id": "evt_123",
  "type": "user_action"
}`}</pre>
            </div>
          </div>

          <div className="comm-card">
            <h4>Asynchronous (Message Queue)</h4>
            <p>Used for event streaming and background processing.</p>
            <div className="code-block">
              <pre>{`// Kafka producer
await producer.send({
  topic: 'behavioral-events',
  messages: [{ value: JSON.stringify(event) }]
});`}</pre>
            </div>
          </div>

          <div className="comm-card">
            <h4>Real-time (WebSocket)</h4>
            <p>Used for streaming data and real-time updates.</p>
            <div className="code-block">
              <pre>{`// WebSocket connection
ws://stream.acepyr.com/v2/behavioral
→ Real-time event stream`}</pre>
            </div>
          </div>

          <div className="comm-card">
            <h4>Service Mesh (gRPC)</h4>
            <p>Used for internal service-to-service communication.</p>
            <div className="code-block">
              <pre>{`// gRPC service definition
service BehavioralService {
  rpc Track(Event) returns (Response);
  rpc Query(QueryRequest) returns (QueryResponse);
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <div className="tech-stack-section">
        <h2>Technology Stack</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <strong>Backend:</strong> Node.js, Go, Python
          </div>
          <div className="tech-item">
            <strong>Databases:</strong> PostgreSQL, Redis, ClickHouse
          </div>
          <div className="tech-item">
            <strong>Streaming:</strong> Apache Kafka, Apache Flink
          </div>
          <div className="tech-item">
            <strong>Cache:</strong> Redis, Memcached
          </div>
          <div className="tech-item">
            <strong>Search:</strong> Elasticsearch
          </div>
          <div className="tech-item">
            <strong>ML/AI:</strong> TensorFlow, PyTorch, scikit-learn
          </div>
          <div className="tech-item">
            <strong>Monitoring:</strong> Prometheus, Grafana, ELK
          </div>
          <div className="tech-item">
            <strong>Cloud:</strong> AWS, GCP, Azure
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitecture;