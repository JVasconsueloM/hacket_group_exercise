from graphene import ObjectType, Schema, String

from apps.datausa.queries import DataUSAQuery


class Query(DataUSAQuery, ObjectType):
    pass


schema = Schema(query=Query)