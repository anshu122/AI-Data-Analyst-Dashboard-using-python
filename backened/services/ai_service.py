def generate_code(user_query: str):
    query = user_query.lower()

    if "total sales by product" in query:
        return 'df.groupby("product")["sales"].sum()'

    elif "average" in query:
        return 'df.mean()'

    else:
        return 'df.head()'