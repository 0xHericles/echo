import { Span, SpanContext } from "@opentelemetry/api";
import { logEchoEvent } from "./engine";

/**
 * ECHO OTel Adapter
 * Translates OpenTelemetry spans into strategic narratives.
 */

export async function processSpan(span: any) {
  const { name, attributes, status, startTime, endTime } = span;
  const traceId = span.spanContext().traceId;
  const spanId = span.spanContext().spanId;

  // Strategic classification logic based on attributes
  let type: 'pivot' | 'achievement' | 'maintenance' | 'alert' = 'maintenance';
  
  if (attributes['agent.action.type'] === 'decision' || attributes['agent.state.change']) {
    type = 'pivot';
  } else if (status.code === 1) { // Success
    type = 'achievement';
  } else if (status.code === 2) { // Error
    type = 'alert';
  }

  const narrative = `[OTel] ${name}: ${attributes['narrative.hint'] || 'Automated execution trace captured.'}`;

  await logEchoEvent({
    project: attributes['service.name'] || 'Unknown Agent',
    type,
    narrative,
    metadata: {
      otel_attributes: attributes,
      duration: (endTime[0] - startTime[0]) * 1000 + (endTime[1] - startTime[1]) / 1000000,
      trace_id: traceId,
      span_id: spanId
    }
  });
}
