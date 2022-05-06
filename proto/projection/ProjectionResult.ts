// Original file: proto/project.proto

import type { ResponseContext as _projection_ResponseContext, ResponseContext__Output as _projection_ResponseContext__Output } from '../projection/ResponseContext';
import type { Ignore as _projection_Ignore, Ignore__Output as _projection_Ignore__Output } from '../projection/Ignore';
import type { InsertOne as _projection_InsertOne, InsertOne__Output as _projection_InsertOne__Output } from '../projection/InsertOne';
import type { UpdateOne as _projection_UpdateOne, UpdateOne__Output as _projection_UpdateOne__Output } from '../projection/UpdateOne';
import type { DeleteOne as _projection_DeleteOne, DeleteOne__Output as _projection_DeleteOne__Output } from '../projection/DeleteOne';

export interface ProjectionResult {
  'context'?: (_projection_ResponseContext | null);
  'ignore'?: (_projection_Ignore | null);
  'insertOne'?: (_projection_InsertOne | null);
  'updateOne'?: (_projection_UpdateOne | null);
  'deleteOne'?: (_projection_DeleteOne | null);
  'operation'?: "ignore"|"insertOne"|"updateOne"|"deleteOne";
}

export interface ProjectionResult__Output {
  'context': (_projection_ResponseContext__Output | null);
  'ignore'?: (_projection_Ignore__Output | null);
  'insertOne'?: (_projection_InsertOne__Output | null);
  'updateOne'?: (_projection_UpdateOne__Output | null);
  'deleteOne'?: (_projection_DeleteOne__Output | null);
  'operation': "ignore"|"insertOne"|"updateOne"|"deleteOne";
}
