# Eventuous Connector

## Sidecar sample for MongoDB

The sidecar is a gRPC bidirectional streaming server. It receives events from the connector and Mongo operations back as JSON. The connector will take care about:
- Subscribing to EventStoreDB
- Pushing events to the sidecar
- Receiving Mongo operations from the sidecar (insert one, update one, etc)
- Executing Mongo operations
- Storing the checkpoint in the `checkpoint` collection

The index name is defined in the connector configuration.
