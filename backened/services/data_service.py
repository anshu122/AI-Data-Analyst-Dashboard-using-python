import pandas as pd

df_store = None

def store_dataframe(df: pd.DataFrame):
    global df_store
    df_store = df

def get_dataframe():
    return df_store