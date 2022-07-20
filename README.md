# Sample gRPC sidecar for Connector

Eventuous [Connector][1] [gRPC sidecar][3] for [MongoDB projector target][2] using PHP.

[1]: https://eventuous.dev/connector/connector-concept/
[2]: https://eventuous.dev/connector/targets/mongo-target/
[3]: https://eventuous.dev/connector/projectors/grpc/

## Sidecar sample for MongoDB

The sidecar is a gRPC bidirectional streaming server. It receives events from the connector and Mongo operations back as JSON. The connector will take care about:
- Subscribing to EventStoreDB
- Pushing events to the sidecar
- Receiving Mongo operations from the sidecar (insert one, update one, etc)
- Executing Mongo operations
- Storing the checkpoint in the `checkpoint` collection

The index name is defined in the connector configuration.
