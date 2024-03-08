#include <stdio.h>
#include<stdlib.h>
#define n 10
int j,i,k;
void selection(int a[n])
{
    for(int i=0;i<10;i++)
    {
        for(j=i+1;j<n;j++)
        {
           if(a[i]>a[j])
          {
            k=a[i];
            a[i]=a[j];
            a[j]=k;
          }
        }
    }
}
int main()
{
    int i,a[n];
     for( i=0;i<=n;i++)
    {
        a[i]=rand() % 100;
    }
    for( i=0;i<n;i++)
    {
      printf("%d\t",a[i]);
    }
    printf("\n");
    selection(a);
    for (i=0;i<n;i++)
    {
      printf("%d\t",a[i]);
    }
    
}